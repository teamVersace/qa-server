require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const qaRouter = require('./router.js');

const corsOptions = {
  origin: 'http://localhost/',
  methods: ['get', 'post', 'put', 'patch'],
  maxAge: '3600',
};

const app = express();
const PORT = process.env.PORT || 8081;

qaRouter.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(qaRouter);
app.use(morgan('dev'));

app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const router = require('./router.js');

// const corsOptions = {
//   origin: 'http://localhost/',
//   methods: ['GET'],
//   maxAge: '3600',
// };

// const app = express();
// const PORT = process.env.PORT || 3000;

// router.use(cors(corsOptions));

// app.use(express.json());
// app.use(router);

// // app.use(
// //   cors({
// //     origin: '*',
// //     methods: ['get', 'post', 'put', 'patch'],
// //   }),
// // );

// // router.get('/qa/questions', controllers.getQuestions);
// // router.get('/qa/questions/:question_id/answers', controllers.getAnswers);
// // router.post('/qa/questions', controllers.postQuestions);
// // app.post('/qa/questions/:question_id/answers', controllers.postAnswers);
// // app.put('/qa/questions/:question_id/helpful', controllers.helpfulQuestion);
// // app.put('/qa/questions/:question_id/report', controllers.reportQuestion);
// // app.put('/qa/answers/:question_id/helpful', controllers.helpfulAnswer);
// // app.put('/qa/answers/:question_id/report', controllers.reportAnswer);

// app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));
