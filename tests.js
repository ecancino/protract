#!/usr/bin/env node --harmony

var protract = require('./src/index.js');

var from = {
  firstname: 'Eduardo',
  lastname: 'Cancino',
  locations: [
    {
      name: 'Mexico City',
      location: {
        lat: 100,
        lng: 100
      }
    },
    {
      name: 'Madrid',
      location: {
        lat: 100,
        lng: 100
      }
    },
    {
      name: 'Aranjuez',
      location: {
        lat: 100,
        lng: 100
      }
    },
    {
      name: 'Boston',
      location: {
        lat: 100,
        lng: 100
      }
    }
  ]
};

function toObject() {
  this.age = 37;
  this.months = function() {
    return this.age * 12;
  }
}

var to1 = new toObject();

var to2 = {
    pets: [
      {
        name: 'Dingo',
        age: 2
      },
      {
        name: 'Duncan',
        age: .7
      }
    ]
};

Object.defineProperty(from, 'height', {
  value: 1.74,
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(from, 'weight', {
  value: 100,
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(from, 'fullname', {
  value: function fullname() {
    return [this.firstname, ' ', this.lastname].join('');
  },
  writable: true,
  configurable: true,
  enumerable: true
});

var to3 = [ '1', '2', '3' ];

var to4 = Object.create(null);

var to5 = Object.create({
  say: 'Hello!'
});

protract(from, to1, to2, to3, to4, to5, null, undefined, { nickname: 'treeskelt' });

console.log('"""""""""""""""""""""""""""""""""');
console.log(from);
console.log('"""""""""""""""""""""""""""""""""');
