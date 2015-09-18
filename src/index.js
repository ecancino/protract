/**
  ## protract
  [Copying object properties, the robust way](http://lea.verou.me/2015/08/copying-properties-the-robust-way/)
  @param {...object} - Multiple objects
  @returns {object} final - Sum of all properties
*/

function protract() {
  var objects = ([].slice.call(arguments)).filter(Boolean),
      final = {};

  objects.forEach(function(object) {
    for (var property in object) {
      var descriptor = Object.getOwnPropertyDescriptor(object, property) || { value: object[property] };
      Object.defineProperty(final, property, descriptor);
    }
  });

  return final;
};

module.exports = protract;
