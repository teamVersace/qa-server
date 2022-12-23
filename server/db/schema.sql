DROP DATABASE IF EXISTS qadb;
CREATE DATABASE qadb;

\c qadb;

CREATE TABLE photoList (
  photo_id SERIAL PRIMARY KEY UNIQUE,
  photo VARCHAR
);

CREATE TABLE answerList (
  answer_id SERIAL PRIMARY KEY UNIQUE,
  body VARCHAR,
  date TIMESTAMPTZ,
  answerer_name VARCHAR,
  helpfulness INTEGER,
  photo_id INTEGER
);

CREATE TABLE questionsList (
  question_id SERIAL PRIMARY KEY UNIQUE,
  answer_id INTEGER REFERENCES answerList(answer_id),
  question_body VARCHAR,
  question_date TIMESTAMPTZ,
  asker_name VARCHAR,
  question_helpfulness INTEGER,
  reported BOOLEAN
);

CREATE TABLE productQuestions (
  product_id INTEGER UNIQUE,
  question_id SERIAL UNIQUE
);

ALTER TABLE answerList ADD FOREIGN KEY (photo_id) REFERENCES photoList(photo_id);
ALTER TABLE questionsList ADD FOREIGN KEY (answer_id) REFERENCES answerList(answer_id);
ALTER TABLE productQuestions ADD FOREIGN KEY (question_id) REFERENCES questionsList(question_id);

\c postgres