function urutkanAbjad(str) {
    return str.split('').sort().join('')
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
  
// split untuk meisahkan kata jadi per huruf seperti hello menjadi h,e,l,l,o
// sort untuk menyusun abjad dari a-z seperti h,e,l,l,o menjadi e,h,l,l,o
// join untuk memasukkan / menyusun kembali yang telah di pisah oleh split seperti e,h,l,l,o menjadi ehllo