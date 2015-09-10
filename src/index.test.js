var protract = require('./index.js'),
    expect = require('chai').expect;

describe('protract', function() {

  it('should return empty object if no other properties', function() {
    var protracted = protract(null, {});
    expect(protracted).to.deep.equal({});
  });

  it('should return original object if no other object', function() {
    var protracted = protract({ 'language': 'javascript' }, null, undefined);
    expect(protracted).to.have.all.keys('language');
  });

  it('should add properties from object literal', function() {
    var objectLiteral = { 'name': 'protract', 'type': 'module' };
    var protracted = protract({ 'language': 'javascript' }, objectLiteral);
    expect(protracted).to.have.all.keys('name', 'type', 'language');
  });

  it('should add properties from instance of constructor', function() {
    var objectLiteral = { 'name': 'protract', 'type': 'module' };
    function FunctionObject() {
      this.name = 'protract';
      this.type = function() {
        return 'module';
      }
    }
    var functionObject = new FunctionObject();
    var protracted = protract({ 'language': 'javascript' }, functionObject);
    expect(protracted).to.have.all.keys('name', 'type', 'language');
  });

  it('should add properties from object literal with defined enumerable property', function() {
    var withDefinedProperty = {};
    Object.defineProperty(withDefinedProperty, 'name', {
      value: 'protract',
      enumerable: true
    });
    var protracted = protract({ 'language': 'javascript' }, withDefinedProperty);
    expect(protracted).to.have.all.keys('name', 'language');
  });

  it('should not add properties from object literal with defined not enumerable property', function() {
    var withDefinedProperty = {};
    Object.defineProperty(withDefinedProperty, 'type', {
      value: 'module',
      enumerable: false
    });
    var protracted = protract({ 'language': 'javascript' }, withDefinedProperty);
    expect(protracted).to.have.all.keys('language');
  });

  it('should support arrays', function() {
    var array = [1, 2, 3];
    var protracted = protract({ 'language': 'javascript' }, array);
    expect(protracted).to.have.all.keys('language', '0', '1', '2');
  });

  it('should support Object.create if property is enumerable', function() {
    var objectCreate = Object.create(Object.prototype, {
      say: {
        value: 'Hello!',
        enumerable: true
      }
    });

    var protracted = protract({ 'language': 'javascript' }, objectCreate);
    expect(protracted).to.have.all.keys('language', 'say');
  });

  xit('should support Accesors', function() {
    var objectCreate = Object.create(Object.prototype, {
      ten: {
        configurable: false,
        enumerable: false,
        get: function() { return 10; },
        set: function(value) { this.ten = value; }
      }
    });

    var protracted = protract({ 'language': 'javascript' }, objectCreate);
    expect(protracted).to.have.all.keys('language', 'ten');
  });

});
