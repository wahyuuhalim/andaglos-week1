// Logic Challenge - Change Me!

function changeMe(arr) {
 // you can only write your code here!
  for(var i = 0; i < arr.length; i++) {
    var person = {};
    
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    person.age = 2018 - arr[i][3];
    
    if (arr[i][3] === undefined || arr[i][3] > 2018) {
      person.age = 'Invalid Birth Year';
    } 
    
    console.log(i + 1 + '. ' + person.firstName + ' ' + person.lastName + ':');
    console.log(person);
  }
  
  return person;
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
changeMe([]); // ""
 

