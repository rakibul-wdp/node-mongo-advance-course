const { errorHandler, two } = require('./errorHandler.js');

two();

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

console.log('Done...!!!');
