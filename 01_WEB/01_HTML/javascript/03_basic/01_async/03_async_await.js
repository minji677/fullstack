function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;

      if (result > 50) {
        const e = new Error('NumberTooBig');

        return reject(e);
      }

      resolve(result);
    }, 1000);
  });

  return promise;
}

async function run() {
  try {
    //await는 프로미스 객체에 담긴 resolve에 담긴 결과를 반환해준다
    let result = await increase(0);
    console.log(result);

    result = await increase(0);
    console.log(result);

    result = await increase(0);
    console.log(result);

    result = await increase(0);
    console.log(result);

    result = await increase(0);
    console.log(result);
  } catch (e) {
    result = await increase(0);
    console.log(e, '-가 발생했다');
  }
}

run();