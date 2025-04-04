fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => {
    const expendedData = { ...json };
    console.log('가져온데이터', json);

    expendedData.title = '변경된속성';
    console.log('확장된데이터', expendedData);
  });
