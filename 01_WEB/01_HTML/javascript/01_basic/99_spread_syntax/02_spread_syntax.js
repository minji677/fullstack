//스프레드 문법
/**
 * 하나로 뭉쳐있는 여러 값들의 집합을 전개해서 개별적인 값 목록으로 만든다
 */

console.log(`가장큰값 : ${Math.max(10, 20, 20)}`);

let arr = [10, 20, 30];

console.log(arr);
console.log(...arr);
console.log(`가장 큰값: ${Math.max(...arr)}`);

//배열 여러개 전달
let arr1 = [10, 30, 20];
let arr2 = [100, 200, 300];
console.log(`가장 작은값: ${Math.min(...arr1, ...arr2)}`);
console.log(`가장 큰값: ${Math.max(...arr1, ...arr2)}`);

//배열 합치기
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let str = 'javascript';

console.log(str);
console.log(...str);
console.log([...str]);
