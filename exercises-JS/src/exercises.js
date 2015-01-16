var yourName = 'Elena Garrone'
dateCompleted = 'DD/MM/YYYY';

function camelCase(string) {
  var string = string.trim();
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

String.prototype.camelCase = function() {
  var string = this.trim();
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
