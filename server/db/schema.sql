DROP DATABASE IF EXISTS qadb;
CREATE DATABASE qadb;

\c qadb;

CREATE TABLE questions (
  id SERIAL NOT NULL UNIQUE,
  product_id INTEGER,
  q_body VARCHAR,
  q_date TIMESTAMPTZ,
  q_by VARCHAR,
  q_email VARCHAR,
  q_helpful INTEGER,
  q_reported INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id SERIAL NOT NULL UNIQUE,
  q_id INTEGER,
  a_body VARCHAR,
  a_date TIMESTAMPTZ,
  a_by VARCHAR,
  a_email VARCHAR,
  a_helpful INTEGER,
  a_reported INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (q_id) REFERENCES questions (id)
);

CREATE TABLE photos (
  id SERIAL NOT NULL UNIQUE,
  a_id INTEGER,
  p_url VARCHAR,
  PRIMARY KEY (id),
  FOREIGN KEY (a_id) REFERENCES answers (id)
);

\c postgres