const models = require('./models');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions(req.query, (err, response) => {
      if (err) {
        console.log('controller error > getQuestions');
        res.status(400).send();
      } else {
        console.log('controller success > getQuestions');
        res.status(200).send(response);
      }
    });
  },

  getAnswers: (req, res) => {
    models.getAnswers(req.query, (err, response) => {
      if (err) {
        console.log('controller error > getAnswers');
        res.status(400).send();
      } else {
        console.log('controller success > getAnswers');
        res.status(200).send(response);
      }
    });
  },

  postQuestions: (req, res) => {
    models.postQuestions(req.body, (err) => {
      if (err) {
        console.log('controller error > postQuestions', err);
        res.status(400).send('error');
      } else {
        console.log('controller success > postQuests');
        res.status(200).send('created');
      }
    });
  },

  postAnswers: (req, res) => {
    models.postAnswers(req.body, req.params, (err) => {
      if (err) {
        console.log('controller error > postAnswers', err);
        res.status(400).send('error');
      } else {
        console.log('controller success > postAnswers');
        res.status(200).send('success');
      }
    });
  },

  helpfulQuestion: (req, res) => {
    models.helpfulQuestion(req.params, (err) => {
      if (err) {
        console.log('controller error > helpfulQuestion');
        res.status(400).send('error');
      } else {
        console.log('controller success > helpfulQuestion');
        res.status(200).send('created');
      }
    });
  },

  reportQuestion: (req, res) => {
    models.reportQuestion(req.params, (err) => {
      if (err) {
        console.log('controller error > reportQuestion');
        res.status(400).send('error');
      } else {
        console.log('controller success > reportQuestion');
        res.status(200).send('created');
      }
    });
  },

  helpfulAnswer: (req, res) => {
    console.log('req: ', req);
    models.helpfulAnswer(req.params, (err) => {
      if (err) {
        console.log('controller error > helpfulAnswer');
        res.status(400).send('error');
      } else {
        console.log('controller success > helpfulAnswer');
        res.status(200).send('success');
      }
    });
  },

  reportAnswer: (req, res) => {
    models.reportAnswer(req.params, (err) => {
      if (err) {
        console.log('controller error > reportAnswer');
        res.status(400).send('error');
      } else {
        console.log('controller error > reportAnswer');
        res.status(200).send('success');
      }
    });
  },
};
