/* eslint-disable no-restricted-syntax */
const pool = require('./db/index');

module.exports = {
  getQuestions: (query, callback) => {
    const productId = query.product_id || 40348;
    const limit = query.count || 5;
    const offset = query.page || 0;
    const queryQ = `SELECT * FROM questions
      WHERE product_id = ${productId}
      LIMIT ${limit} OFFSET ${offset}`;
    const queryA = `SELECT * FROM answers
      WHERE question_id IN (SELECT question_id FROM questions WHERE product_id = ${productId})`;
    const queryP = `SELECT * FROM photos
      WHERE answer_id IN (SELECT answers.id FROM answers, questions WHERE answers.question_id = questions.question_id AND questions.product_id = ${productId})`;
    pool.query(queryQ, (err1, result1) => {
      if (err1) {
        callback(err1);
      } else {
        pool.query(queryA, (err2, result2) => {
          if (err2) {
            callback(err2);
          } else {
            pool.query(queryP, (err3, result3) => {
              for (const k of result3.rows) {
                for (const l of result2.rows) {
                  if (k.answer_id === l.id) {
                    if (l.photos === undefined) {
                      l.photos = [];
                      const imageObj = { id: k.id, url: k.url };
                      l.photos.push(imageObj);
                    } else {
                      const imageObj = { id: k.id, url: k.url };
                      l.photos.push(imageObj);
                    }
                  } else if (l.photos === undefined) {
                    l.photos = [];
                  }
                }
              }
              for (const i of result2.rows) {
                for (const j of result1.rows) {
                  if (i.question_id === j.question_id) {
                    if (j.answers === undefined) {
                      j.answers = {};
                      j.answers[i.id] = i;
                    } else {
                      j.answers[i.id] = i;
                    }
                  } else if (j.answers === undefined) {
                    j.answers = {};
                  }
                }
              }
              if (err3) {
                callback(err3);
              } else {
                const result = { product_id: productId, results: result1.rows };
                callback(err3, result);
              }
            });
          }
        });
      }
    });
  },

  getAnswers: (query, callback) => {
    const questionId = query.question_id || 141984;
    const limit = query.count || 5;
    const offset = query.page || 0;
    const queryA = `SELECT * FROM answers
      WHERE question_id = ${questionId}
      LIMIT ${limit} OFFSET ${offset}`;
    const queryP = `SELECT * FROM photos
      WHERE answer_id IN (SELECT id FROM answers WHERE question_id = ${questionId})`;
    pool.query(queryA, (err1, result1) => {
      if (err1) {
        console.log('emodels error1 > getAnswersr: ', err1);
        callback(err1);
      } else {
        pool.query(queryP, (err2, result2) => {
          for (const i of result2.rows) {
            for (const j of result1.rows) {
              if (j.id === i.answer_id) {
                if (j.photos === undefined) {
                  j.photos = [];
                  const imageObj = { id: i.id, url: i.url };
                  j.photos.push(imageObj);
                } else {
                  const imageObj = { id: i.id, url: i.url };
                  j.photos.push(imageObj);
                }
              } else if (j.photos === undefined) {
                j.photos = [];
              }
            }
          }
          if (err2) {
            console.log('emodels error2 > getAnswersr: ', err2);
            callback(err2);
          } else {
            callback(err2, result1.rows);
          }
        });
      }
    });
  },

  postQuestions: (body, callback) => {
    const productId = body.product_id || 40348;
    const { name, email } = body;
    const question = body.body;
    const queryQ = `INSERT INTO questions (
      product_id,
      question_body,
      question_date,
      asker_name,
      q_email,
      question_helpfulness,
      reported
    )
    VALUES (
      ${productId},
      '${question.replaceAll("'", "''")}',
      ${Date.now()},
      '${name}',
      '${email}',
      0,
      0
    )`;
    pool.query(queryQ, (err, result) => {
      if (err) {
        console.log('models error > postQuestions');
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },

  postAnswers: (body, params, callback) => {
    const questionId = params.question_id;
    const answer = body.body;
    const answerer = body.answerer_name;
    const email = body.a_email;
    const queryA = `INSERT INTO answers (
      question_id,
      body,
      date,
      answerer_name,
      a_email,
      helpfulness,
      a_reported
    )
    VALUES (
      ${questionId},
      '${answer}',
      ${Date.now()},
      '${answerer}',
      '${email}',
      0,
      0
    )`;
    pool.query(queryA, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },

  helpfulQuestion: (data, callback) => {
    const questionId = data.question_id;
    const queryQ = `UPDATE questions
    SET question_helpfulness = question_helpfulness + 1
    WHERE question_id = ${questionId}`;
    pool.query(queryQ, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },

  reportQuestion: (data, callback) => {
    console.log('data: ', data);
    const questionId = data.question_id;
    const queryQ = `UPDATE questions
    SET reported = reported + 1
    WHERE question_id = ${questionId}`;
    pool.query(queryQ, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },

  helpfulAnswer: (data, callback) => {
    const answerId = data.question_id;
    const queryA = `UPDATE answers
    SET helpfulness = helpfulness + 1
    WHERE id = ${answerId}`;
    pool.query(queryA, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },

  reportAnswer: (data, callback) => {
    const answerId = data.question_id;
    const queryA = `UPDATE answers
    SET a_reported = a_reported + 1
    WHERE id = ${answerId}`;
    pool.query(queryA, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },
};
