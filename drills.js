'use strict';
// // Exercis 1
// console.log('Hi, my name is Chris and I\'m 29 years old');


// // Exercise 2
// function whoAmI() {
//   console.log('Hi, my name is Chris and I\'m 29 years old');

// }

// whoAmI();

// // Exercise 3

// function whoAmI(name, age) {
//     console.log('Hi, my name is Chris and I\'m 29 years old');
  
//   }
  
//   whoAmI();

// Excercise 4

// function whoAmI(name, age) {
//   var yearOfBirth = 2016 - age;
//   console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old.');
//   console.log('I was born in ' + yearOfBirth + ' .');
// }
    
// whoAmI('Chris', 29);

// Exercise 5

// function yearOfBirth(age) {
//   return 2016 - age;
// }

// function whoAmI(name, age) {
//   var yob = yearOfBirth(age);
//   console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old.');
//   console.log('I was born in ' + yob + ' .');
// }
  
// whoAmI('Chris', 29);

// Excersize 6

// function yearOfBirth(age) {
//   try {
//     if (age < 0) throw new Error('Age can not be negative');
//   }
//   catch (err) {
//     console.log(err);
//   }
//   return 2016 - age;
// }

// function whoAmI(name, age) {
//   var yob = yearOfBirth(age);
//   console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old.');
//   console.log('I was born in ' + yob + ' .');
// }
   
// whoAmI('Chris', -29);


// Excersize 7 

// function yearOfBirth(age) {
//   try {
//     if (age < 0) throw new Error('Age can not be negative');
//   }
//   catch (err) {
//     console.log(err);
//   }
//   return 2016 - age;
// }
  
// function whoAmI(name, age) {
//   if (!name || !age) {console.error('Arguments not valid');}
//   var yob = yearOfBirth(age);
//   console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old.');
//   console.log('I was born in ' + yob + ' .');
// }
     
// whoAmI();

// Excersize 8
  
function yearOfBirth(age) {
  try {
    if (age < 0) throw new Error('Age can not be negative');
  }
  catch (err) {
    console.log(err);
  }
  return 2016 - age;
}
    
function whoAmI(name, age) {
  if (!name || typeof name !== 'string' || !age || isNaN(age)) {
    console.error('Arguments not valid');
  }
  const yob = yearOfBirth(age);
  console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old.');
  console.log('I was born in ' + yob + ' .');
}
       
whoAmI('Chris', 28);

  
  
  
  
  



