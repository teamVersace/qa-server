/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [{ duration: '30s', target: 1000 }],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(100)<3000'],
  },
};

// export const options = {
//   vus: 1,
//   duration: '30s',
// };

// --------------------------
// GET questions
// --------------------------
export default function () {
  const id = Math.floor(Math.random() * 1000011);

  const qa = http.get(`http://localhost:3000/qa/questions?product_id=${id}`);
  check(qa, { 'status was 200': (res) => res.status === 200 });
}

// --------------------------
// GET answers
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 3518994);

//   const qa = http.get(`http://localhost:3000/qa/questions/${id}/answers`);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// POST question
// --------------------------
// export default function () {
//   const header = {
//     body: 'is this question posting? 1/2 @ 5:38',
//     name: 'chucky',
//     email: 'hello@hello.com',
//     product_id: 40346,
//   };

//   const qa = http.post('http://localhost:3000/qa/questions/', header);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// POST answer
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 1000011);

//   const header = {
//     body: 'is this answer posting? 1/4',
//     answerer_name: 'chucky',
//     email: 'hello@hello.com',
//   };

//   const qa = http.post(`http://localhost:3000/qa/questions/${id}/answers`, header);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// PUT question helpful
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 1000011);

//   const qa = http.put(`http://localhost:3000/qa/questions/${id}/helpful`);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// PUT question report
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 1000011);

//   const qa = http.put(`http://localhost:3000/qa/questions/${id}/report`);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// PUT answer helpful
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 6879306);

//   const qa = http.put(`http://localhost:3000/qa/answers/${id}/helpful`);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }

// --------------------------
// PUT answer report
// --------------------------
// export default function () {
//   const id = Math.floor(Math.random() * 6879306);

//   const qa = http.put(`http://localhost:3000/qa/answers/${id}/report`);
//   check(qa, { 'status was 200': (res) => res.status === 200 });
// }
