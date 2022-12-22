const mongoose = require('mongoose');
mongoose.connect('/qa/questions');

const qaPhotoSchema = new mongoose.Schema ({
  photo: String
});

const qaASchema = new mongoose.Schema({
  answer_id: {type: Number, unique: true},
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  Photos: [qaPhotoSchema]
});

const qaQSchema = new mongoose.Schema ({
  question_id: {type: Number, unique: true},
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers: [qaASchema]
});

const qaSchema = new mongoose.Schema ({
  product_id: {type: Number, unique: true},
  questions: [qaQSchema]
});

const QAdatabase = mongoose.model('QADatabase', qaSchema);

module.exports.QAdatabase = QAdatabase;