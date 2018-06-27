function changeVocals (str) {
  var test = reverseWord(str)
  var result = ''

  for(var i = 0 ; i < test.length ; i++){
    if(test[i] == 'a') {
      result = result + 'b';
    } else if(test[i] == 'i') {
      result = result + 'j';
    } else if(test[i] == 'u') {
      result = result + 'v';
    } else if(test[i] == 'e') {
      result = result + 'f';
    } else if(test[i] == 'o') {
      result = result + 'p';
    } else if(test[i] == 'A') {
      result = result + 'B';
    } else if(test[i] == 'I') {
      result = result + 'J';
    } else if(test[i] == 'U') {
      result = result + 'V';
    } else if(test[i] == 'E') {
      result = result + 'F';
    } else if(test[i] == 'O') {
      result = result + 'P';
    } 
     else {
      result = result + test[i];
    }
  }

  return result
}
  
function reverseWord (str) {
  var test = setLowerUpperCase(str)
  var result = ''
  for(var i = 0 ; i < test.length ; i++){
    result = test[i] + result
  }
  return result
}
  
function setLowerUpperCase (str) {
  var test = removeSpaces(str)
  var hurufKecil = removeSpaces(str.toLowerCase())
  var hurufBesar = removeSpaces(str.toUpperCase())
  var result = ''
  for(var i = 0 ; i < test.length ; i++){
    if(test[i] === hurufBesar[i]){
      result+=hurufKecil[i]
    }else{
      result+=hurufBesar[i]
    }
  }
  return result  
}
  
function removeSpaces (str) {
  var spasi = str.split(' ').join('')
  return spasi
}
  
function passwordGenerator (name) {
  if(changeVocals(name).length <= 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return changeVocals(name)
  
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


