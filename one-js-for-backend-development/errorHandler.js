console.log(module);

export function errorHandler(error) {
  const { name, message, stack } = error;

  console.log(name, message);

  // logger.error({
  //   name,
  //   message,
  //   stack,
  // });

  // console.log('Internal server error');
}

// module.exports.two = function two() {
//   console.log('two');
// };

module.exports.two = function two() {
  console.log('two');
};

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// module.exports = { errorHandler, two };

console.log(module);

export default two;
