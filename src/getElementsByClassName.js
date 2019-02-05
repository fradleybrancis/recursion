// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className
) {

  let classy = [];

  var checkNodes = function(nodes) {

    var kids = nodes.children;
    
    forEach(kids, function(element){
      
      if (element.classList === true && element.classList.contains(className)) {
        classy.push(element);
      };
      
      if (element.children) {
        checkNodes(element.children);
      };
    });
  };

  checkNodes(document.body);

  return classy;

};

var forEach = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    };
  } else {
    for(var i in collection) {
      iterator(collection[i], i, collection);
    };
  };
};