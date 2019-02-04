// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var newString = "";
  var stringRay = '[]';
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (obj.length === 0) {
    return stringRay;
  } else if (obj.length === 1) {
    return '[' + stringifyJSON(obj[0]) + ']';
  } else if (obj.length > 2) {

  }
  
  return String(obj);
  
};