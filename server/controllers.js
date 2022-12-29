const models = require('./models');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions((err, response) => {
      if (err) {
        console.log('error in controller');
        res.status(400).send();
      } else {
        console.log('success in controller');
        res.status(200).send(response);
      }
    });
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
