// Tests for true and false values where the value is greater than 18 and less than 18.
// && operator is used to test if the both values are greater than or equal to 18 in order to return true.
// || operator is used to test if either the values are less than or equal to 18 in order to return true.
// ! inverts truthiness and converts to boolean. !! inverts again to create a boolean value with original truthiness.

var age1 = 20;
var age2 = 30;

//console.log(age1 > 18 && age2 > 18);
//console.log(age1 < 18 && age2 > 18);
//console.log(age1 < 18 || age2 > 18);

// using && for defensive checks

var me = {
  name: "Graeme",
  age: 37,
  isHappy: true,
  favCols: ["red", "blue", "white"],
  //location: { postCode: "KA3 6EE", city: "Kilmarnock" },
};

//console.log(me.location);
console.log(me && me.location && me.location.postCode); // && acts as defensive check that the object exists and then checks the property exists. Even if the property does not exist, it still returns without the error. i.e.

// Ternary operator - allows yo uto resolve with a response other than true or false. Represented in sigle ? 

var age = 12;
var text = age > 18 ? "You are able to drink" : "You are not able to drink"; // this allows you to validate the age and return message in text format based on if true or false

console.log(text);
