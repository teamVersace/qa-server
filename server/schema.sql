DROP DATABASE IF EXISTS qadb;
CREATE DATABASE qadb;

USE qadb;

CREATE TABLE productQuestions (
  product_id INTEGER PRIMARY KEY,
  question_id INTEGER[],
  FOREIGN KEY (question_id) REFERENCES questionsList(question_id)
)

CREATE TABLE questionsList (
  question_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  answer_id INTEGER[],
  question_body VARCHAR,
  question_date TIMESTAMPTZ,
  asker_name VARCHAR,
  question_helpfulness INTEGER,
  reported BOOLEAN,
  FOREIGN KEY (answer_id) REFERENCES answerList(answer_id)
)

CREATE TABLE answerList (
  answer_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  body VARCHAR,
  date TIMESTAMPTZ,
  answerer_name VARCHAR,
  helpfulness INTEGER,
  photos  VARCHAR[],
)