function checkAB(num) {
  var str = num.split(' ');
  var newStr = str.join('');

  for(var i = 0; i < newStr.length; i++) {
    if(newStr[i] === 'a') {
      if(newStr[i+3] === 'b' || newStr[i+3] === 'a') {
        return true;
      } else {
        return false;
      }
    }
  }
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
