const qaRouter = require('express').Router();
const controllers = require('./controllers');

qaRouter.get('loaderio-ee60e09ecaecfcdfbb7ad389b9ce4295', (req, res) =>{
  res.send('loaderio-ee60e09ecaecfcdfbb7ad389b9ce4295');
});

qaRouter.get('/qa/questions', controllers.getQuestions);
qaRouter.get('/qa/questions/:question_id/answers', controllers.getAnswers);
qaRouter.post('/qa/questions', controllers.postQuestions);
qaRouter.post('/qa/questions/:question_id/answers', controllers.postAnswers);
qaRouter.put('/qa/questions/:question_id/helpful', controllers.helpfulQuestion);
qaRouter.put('/qa/questions/:question_id/report', controllers.reportQuestion);
qaRouter.put('/qa/answers/:question_id/helpful', controllers.helpfulAnswer);
qaRouter.put('/qa/answers/:question_id/report', controllers.reportAnswer);

module.exports = qaRouter;
