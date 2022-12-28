const pool = require('./db/index.js');

module.exports = {
  getQuestions: (callback) => {
    let product_id = 1
    let query = `SELECT * FROM questions WHERE product_id = ${product_id}`;
    pool.query(query, (err, response) => {
      if (err) {
        console.log('error in models');
      } else (
        callback(err,response)
      )
    })
  }
};

// const pool = require('./db/index.js');

// module.exports = {
//   getQuestions: (callback) => {
//     let product_id = 1
//     let query = `SELECT * FROM questions WHERE product_id = ${product_id}`;
//     pool
//       .query(query)
//       .then((res) => {
//         console.log('res from model: ', res.rows);
//         callback(res.rows);
//       })
//       .catch((err) => {
//         console.log('error from model: ', err);
//         callback(err);
//       })
//   }
// };
