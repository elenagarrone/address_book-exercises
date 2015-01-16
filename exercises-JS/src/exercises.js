var yourName = 'Elena Garrone'
dateCompleted = 'DD/MM/YYYY';

// ======EXERCISE 1======
function camelCase(string) {
  var string = string.trim();
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}


// ======EXERCISE 2======
String.prototype.camelCase = function() {
  var string = this.trim();
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}


// ======EXERCISE 3======
function masterSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function sum(){
  return masterSum.apply(this, arguments);
}


// ======EXERCISE 4======
function masterSum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}


// ======EXERCISE 5======
var Hero = {
  hitPoints: 100,
  getLife: function () {
    return this.hitPoints;
  }
};
// console.log(Hero.getLife());
// // a) -> 100
// var LinksLife = Hero.getLife;
// console.log(LinksLife());
// // b) -> undefined


// ======EXERCISE 6======
var getLife = Hero.getLife;
var LinksLife = getLife.bind(Hero);


// ======EXERCISE 7======
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP    = function() {},
    fBound  = function() {
      return fToBind.apply(this instanceof fNOP && oThis
        ? this
        : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments)));
      };
      
      if (this.prototype)
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
      };
    }
