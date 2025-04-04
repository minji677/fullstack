const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('안녕하세요 박태근입니다');
});

app.listen(3000, () => {
  res.cend('서버가 3000포트에서 실행중입니다...');
});
