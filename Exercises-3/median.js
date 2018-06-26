// Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).

function cariMedian(arr) {                // contoh arr = [1,3,4,10,12,13] length = 6
  var test = Math.floor(arr.length / 2);  // variabel untuk length di bagi 2 dan dibulatkan kebawah 
                                          // var test = 3 karena length 6 / 2 = 3 
  if(arr.length % 2 === 0){               // jika length bisa di bagi 2
    return (arr[test] + arr[test -1]) / 2;// maka arr[test] yaitu 10 + arr[test -1] yaitu 4 dan / 2
  }else{                                  // maka totalnya 7 jadi outputnya 7
    return arr[test]  // contoh arr = [1,5,5] length 3
  }                   // karena arr.length / 2 masih ada sisa yaitu 1.5 dan dibulakan dengan floor jadi 1
}                     // var test = 1, maka return arr[test] yaitu 5

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3            arr.length % 2 = 1
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7      arr.length % 2 = 0
console.log(cariMedian([3, 4, 7, 6, 10])); // 7           arr.length % 2 = 1
console.log(cariMedian([1, 3, 3])); // 3                  arr.length % 2 = 1
console.log(cariMedian([7, 7, 8, 8])); // 7.5             arr.length % 2 = 0
