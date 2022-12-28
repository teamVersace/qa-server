const client = require('./db/index.js');

module.exports = {
  getQuestions: (callback) => {
    let query = 'SELECT * FROM questions';
    client.query(query, (err, res) => {
      if (err) {
        console.log('error model: ', err);
      } else {
        callback(err, res);
      }
    })
  }
};
