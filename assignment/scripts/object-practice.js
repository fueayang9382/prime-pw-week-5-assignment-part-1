console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let myInfo = {
firstName: 'Tou', 
lastName: 'Yang',
hasSiblings: true,
shoeCount: 10,
favThreeFoods: ['Pho', 'french fries', 'eggrolls']
}// end of myInfo
console.log('this is my info', myInfo);

const me = {
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName

*/
console.log(myInfo.firstName, myInfo.lastName);
const fullName = myInfo.firstName  +' '+ myInfo.lastName

console.log(fullName);
//console.log('This is my full name', myinfo(firstName, lastName));

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('This is my first favorite food:', myInfo.favThreeFoods[0]);
console.log('this is my last favorite food:', myInfo.favThreeFoods[2]);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

myInfo.shoeCount = myInfo.shoeCount + 2; 

console.log('This is my shoeCount:',myInfo.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
console.log('this is myInfo:', myInfo);


myInfo.favoriteColor = myInfo.favoriteColor = 'Red'; 


console.log('this is myInfo:', myInfo);