module.exports = function protract(protracted) {
  var objects = [];
  objects.push.apply(objects, arguments) && objects.shift();

  objects.forEach(function(object) {
    for (var property in object) {
      var descriptor = Object.getOwnPropertyDescriptor(object, property) || { value: object[property] };
      Object.defineProperty(protracted, property, descriptor);
    }
  });
  return protracted;
};
