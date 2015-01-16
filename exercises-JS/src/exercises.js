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
