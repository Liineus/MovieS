
  
var y = document.getElementsByClassName('revTeaser');
var aNode = y[0];
var arrFromList = Array.prototype.slice.call(y);

console.log(arrFromList);
  
var rand = arrFromList[Math.floor(Math.random() * arrFromList.length)];
var random = y[Math.floor(Math.random() * arrFromList.length)];

console.log(rand);




console.log(random);

random.style.display = "inline"


