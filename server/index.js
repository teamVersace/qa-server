require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const controllers = require('./controllers.js');
const db = require('./db/index.js');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(
  cors({
    origin: '*',
    methods: ['get', 'post', 'put', 'patch'],
  }),
);

app.get('/qa/questions', controllers.getQuestions);
app.get('/qa/questions/:question_id/answers', controllers.getAnswers);
app.post('/qa/questions', controllers.postQuestions);
app.post('/qa/questions/:question_id/answers', controllers.postAnswers);
app.put('/qa/questions/:question_id/helpful', controllers.helpfulQuestion);
app.put('/qa/questions/:question_id/report', controllers.reportQuestion);
app.put('/qa/answers/:question_id/helpful', controllers.helpfulAnswer);
app.put('/qa/answers/:question_id/report', controllers.reportAnswer);

app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));
