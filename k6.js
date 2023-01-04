/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '20s',
};

export default function () {
  const id = Math.floor(Math.random() * (900000) + 9000338);

  const qa = http.get(`http://localhost:3000/qa/questions/${id}`);
  check(qa, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
