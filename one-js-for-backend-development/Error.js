async function getData() {
  try {
    // undefined.find();

    const emailError = new Error('Email already exist');
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
}

getData();

function errorHandler(error) {
  const { name, message, stack } = error;

  console.log(name, message);

  // logger.error({
  //   name,
  //   message,
  //   stack,
  // });

  // console.log('Internal server error');
}

console.log('Done...!!!');
