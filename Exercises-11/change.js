function changeMe(arr) {
    var generator = 0
    var result = []
    for(var i = 0 ; i < arr.length ; i++){
      generator++
      var person = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 2018 - arr[i][3],
      }
      console.log(generator + '. ' + person.firstName + ' ' + person.lastName)
      if(arr[i][3] === undefined){
        person.age = 'Invalid Birth Year'
      }
      console.log(person)
    }
  
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""}