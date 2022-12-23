const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const csvQuestions = [];
const csvAnswers = [];
const csvPhotos = [];

fs.createReadStream(path.join(__dirname), './csv/questions.csv')
  .pipe(csv())
  .on('data', data => {
    csvQuestions.push(data);
  })
  .on('end', () => {
    console.log(csvQuestions);
  });

  csv({ separator: 'delimiter here' });