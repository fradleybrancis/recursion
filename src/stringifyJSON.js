// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var newString = "";
  var stringRay = [];


  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number') {
    return String(obj);
  } else if (obj == {}) {
    return '{}';
  } else if (obj.length !== undefined && typeof obj === 'object') {
    if (obj.length === 0) {
      return '[]';
    } else if (obj.length > 0) {
        for (var i = 0; i < obj.length; i++) {
          stringRay.push(stringifyJSON(obj[i]));
        }
        return '[' + stringRay + ']';        
    }
  } else if (obj.length === undefined && typeof obj === 'object' ) {
    var keyCount = 0;    
    for (var i in obj) {
      keyCount++
    }
    if (keyCount === 0) {
      return '{}';
    }
  }
  
  return String(obj);


  
};

JSON.stringify(stringifiableObjects[7])