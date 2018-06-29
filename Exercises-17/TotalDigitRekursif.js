function totalDigitRekursif(angka) {
    var newStr = String(angka);

    if(newStr.length === 1){
        return angka
    }else{
        var num = Number(newStr.slice(0,-1)); 
        var total = Number(newStr[newStr.length-1])
        return total+=totalDigitRekursif(num)
    }
}
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5