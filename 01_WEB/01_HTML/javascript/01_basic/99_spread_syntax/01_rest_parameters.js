//rest Perameter ( 나머지 매개변수)

function merge(msg1, msg2) {
  return msg1 + msg2;
}
console.log(merge('안녕하세요', '반갑습니다'));
console.log(merge('안녕하세요', '반갑습니다', '저는 김민지입니다.'));
function mergeAll(...args) {
  let message = '';
  for (let arg of args) {
    message += arg;
  }
  return message;
}

console.log(mergeAll('안녕하세요', '반갑습니다'));
console.log(mergeAll('안녕하세요', '반갑습니다', '저는 김민지입니다.'));

// (...)나머지 매개변수는 항상 마지막이어야한다
// function mergeAll(arg1, ...args) {}
