/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
  const id = Math.floor(Math.random() * 1000011);

  const qa = http.get(`http://localhost:3000/qa/questions?product_id=${id}`);
  check(qa, { 'status was 200': (res) => res.status === 200 });
  sleep(1);
}
