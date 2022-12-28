const models = require('./models.js');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions((err, response) => {
      if (err) {
        res.status(400).send('error controller: ', err);
      } else {
        res.status(200).send(response);
      }
    })
  },

  getAnswers: () => {
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
