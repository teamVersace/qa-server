require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const controllers = require('./controllers.js');

const app = express(); // calling express as a function, we create an application to setup server
const PORT = process.env.PORT || 8080;

const clientDirPath = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use(express.static(clientDirPath));

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
