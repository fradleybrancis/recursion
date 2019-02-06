// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className
) {

  let school = [];
  
  var checknode = function(nodes) {
    var kids = nodes.childNodes
    for (var i in kids) {
      var currentNode = kids[i];
      var nextKids = kids[i].childNodes;
      var currentClass = kids[i].classList;

      if (currentClass && currentClass.contains(className)) {
        school.push(currentNode);
      }
      if (nextKids !== undefined) {
        checknode(currentNode);
      };
    }
  };

  checknode(document);

  // if (document.body.classList === className) {
  //   school.push(document.body)
  // }

  return school;

};

// var currentSchedule = kids[i].classList || [];

// var nextCollection = kids[i].childre
// for (var currentClass in currentSchedule) {
//   if (currentSchedule[currentClass] === className) {
//     school.push(kids[i]);
//   }
// }
// if (nextCollection) {
//   checkelement(nextCollection);
// }