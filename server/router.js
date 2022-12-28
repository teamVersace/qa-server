const qaRouter = require('express').Router();
const controllers = require('./controllers.js');

qaRouter.get('/qa/questions', controllers.getQuestions);
qaRouter.get('/qa/questions/:question_id/answers', controllers.getAnswers);
qaRouter.post('/qa/questions', controllers.postQuestions);
qaRouter.post('/qa/questions/:question_id/answers', controllers.postAnswers);
qaRouter.put('/qa/questions/:question_id/helpful', controllers.helpfulQuestion);
qaRouter.put('/qa/questions/:question_id/report', controllers.reportQuestion);
qaRouter.put('/qa/answers/:question_id/helpful', controllers.helpfulAnswer);
qaRouter.put('/qa/answers/:question_id/report', controllers.reportAnswer);

module.exports = qaRouter;