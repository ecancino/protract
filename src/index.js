module.exports = function protract() {
  var objects = (Array.prototype.slice.call(arguments)).filter(Boolean),
      final = {};

  objects.forEach(function(object) {
    for (var property in object) {
      var descriptor = Object.getOwnPropertyDescriptor(object, property) || { value: object[property] };
      Object.defineProperty(final, property, descriptor);
    }
  });

  return final;
};
