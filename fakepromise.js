exports = module.exports;

exports.promise = function (delayUpTo, passValue = "") {
  const delay = Math.random() * delayUpTo; 
  return new Promise((resolve) => {
    setTimeout((passValueArg) => {
      resolve(passValueArg);
    }, delay, passValue);
  });
}