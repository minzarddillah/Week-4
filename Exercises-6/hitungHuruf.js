function hitungHuruf(kata) {
  var kataSplit = kata.split(' ');
  var result = [];
  for(var i = 0; i < kataSplit.length; i++) {
    for(var j = 0; j < kataSplit[i].length; j++) {
      for(var k = 1; k < kataSplit[i].length; k++) {
        if(kataSplit[i][j] === kataSplit[i][j+k]) {
          result.push(kataSplit[i]);
        }
      }
    }
  }
  return result[0]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

