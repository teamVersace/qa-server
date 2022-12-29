/* eslint-disable no-restricted-syntax */
const pool = require('./db/index');

module.exports = {
  getQuestions: (callback) => {
    const productId = 40343;
    const queryQ = `SELECT * FROM questions
      WHERE product_id = ${productId}`;
    const queryA = `SELECT * FROM answers
      WHERE question_id IN (SELECT question_id FROM questions
        WHERE product_id = ${productId})`;
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
                      l.photos.push(k.url);
                    } else {
                      l.photos.push(k.url);
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

  getAnswers: (callback) => {
    const productId = 40343;
    const queryCall = `SELECT * FROM questions
      WHERE questions.product_id = ${productId}
      AND answers.question_id = questions.question_id`;
    pool.query(queryCall, (err, response) => {
      if (err) {
        console.log('error in models');
        callback(err);
      } else {
        console.log('success in models');
        callback(err, response);
      }
    });
  },

  postQuestions: () => {
  },

  postAnswers: () => {
  },

  helpfulQuestion: () => {
  },

  reportQuestion: () => {
  },

  helpfulAnswer: () => {
  },

  reportAnswer: () => {
  },
};
