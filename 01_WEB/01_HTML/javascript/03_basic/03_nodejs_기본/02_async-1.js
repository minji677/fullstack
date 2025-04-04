function displayA() {
  console.log('A');
}
function displayB() {
  setTimeout(() => {
    console.log('B');
  }, 2000);
}
function displayC() {
  setTimeout(() => {
    console.log('C');
  }, 2000);
}
displayA();
displayB();
displayC();
