require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const qaRouter = require('./router');

const corsOptions = {
  origin: 'http://localhost/',
  methods: ['get', 'post', 'put', 'patch'],
  maxAge: '3600',
};

const app = express();
const PORT = process.env.PORT || 3000;

qaRouter.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(qaRouter);

app.listen(PORT, console.log(`Port ${PORT}`));
