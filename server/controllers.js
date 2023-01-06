const models = require('./models');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions(req.query, (err, response) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(response);
      }
    });
  },

  getAnswers: (req, res) => {
    models.getAnswers(req.query, (err, response) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(response);
      }
    });
  },

  postQuestions: (req, res) => {
    models.postQuestions(req.body, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('created');
      }
    });
  },

  postAnswers: (req, res) => {
    models.postAnswers(req.body, req.params, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('success');
      }
    });
  },

  helpfulQuestion: (req, res) => {
    models.helpfulQuestion(req.params, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('created');
      }
    });
  },

  reportQuestion: (req, res) => {
    models.reportQuestion(req.params, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('created');
      }
    });
  },

  helpfulAnswer: (req, res) => {
    models.helpfulAnswer(req.params, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('success');
      }
    });
  },

  reportAnswer: (req, res) => {
    models.reportAnswer(req.params, (err) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send('success');
      }
    });
  },
};
