const parse = require('csv-parse');
const fs = require('fs');
const path = require('path');

const csvQuestions = [];
// const csvAnswers = [];
// const csvPhotos = [];

fs.createReadStream(path.join(__dirname), './csv/questions.csv')
  .pipe(
    parse({
      delimiter: ',',
    }),
  )
  .on('data', (dataRow) => {
    csvQuestions.push(dataRow);
  })
  .on('end', () => {
    console.log(csvQuestions);
  });

// fs.createReadStream(path.join(__dirname), './csv/questions.csv')
//   .pipe(csv())
//   .on('data', data => {
//     csvQuestions.push(data);
//   })
//   .on('end', () => {
//     console.log(csvQuestions);
//   });

//   csv({ separator: 'delimiter here' });
