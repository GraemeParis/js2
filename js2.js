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

// var family = {
//   name: "Graeme",
//   age: 37,
//   isHappy: true,
//   favCols: ["red", "blue", "white"],
//   location: { postCode: "KA3 6EE", city: "Kilmarnock" },
// }
// {
//   name: "Zoe",
//   age: 35,
//   isHappy: true,
//   favCols: ["red", "blue", "white"],
//   location: { postCode: "KA3 6EE", city: "Kilmarnock" },
// };

// var html = "";
// for ( var i = 0; i < family.length; i++ ) {
// html = html + "<p>"+ family[i].name "</p>";
// }

// console.log(html);

//console.log(me.location);var me = {};
//me.location = { postCode: "KA3 6EE", city: "Kilmarnock" };location: { postCode: "KA3 6EE", city: "Kilmarnock" };
//console.log(me && me.location && me.location.postCode); // && acts as defensive check that the object exists and then checks the property exists. Even if the property does not exist, it still returns without the error. i.e.

// Ternary operator - allows yo uto resolve with a response other than true or false. Represented in sigle ?

//var age = 12;
//var text = age > 18 ? "You are able to drink" : "You are not able to drink"; // this allows you to validate the age and return message in text format based on if true or false

//console.log(text);

// Control flow - has either if statement or switch statement.

//var age = 29;

//if (age > 18) {
//  console.log("You are able to drink");
//} else {
//  console.log("you are not able to drink");
// }

//if (age < 18) {
//  console.log("you are a child"); // validates the < 18 age range
//} else if (age < 42) {
//  console.log("you are an adult"); // validates 18-42
//} else {
//  console.log("you are a elderly"); // validates 42+
// }

// switch statement - for concrete cases // type switch and it prepopulates the code, you just need to add more case where needed as well as adding break statements. Break statements ends the block

// switch (age) {
//   case 17:
//     console.log("you cannot drink");
//     break;

//   case 18:
//     console.log("you can drink");
//     break;

//   case 19:
//     console.log("you are steaming");
//     break;

//   default:
//     console.log("unable to determine your drunkness"); // works as default return when above conditions arent me
//     break;
// }

//loops

// var favCols = ["red", "blue", "white"];
// // Always need starting point i=0, counter - favCols.length - check all the items. i++ tells to increment the counter by 1.
// for (var i = 0; i < favCols.length; i++) {
//   console.log(i, favCols[i]);
// }

var family = [
  {
    name: "Graeme",
    age: 37,
    isHappy: true,
    favCols: ["red", "blue", "white"],
    location: { postCode: "KA3 6EE", city: "Kilmarnock" },
  },
  {
    name: "Zoe",
    age: 35,
    isHappy: true,
    favCols: ["red", "blue", "white"],
    location: { postCode: "KA3 6EE", city: "Kilmarnock" },
  },
];

var html = "";

for (var i = 0; i < family.length; i++) {
  html =
    html +
    "<div><p>Name:" +
    family[i].name +
    "</p><p>Age:" +
    family[i].age +
    "</p></div>";
}

// console.log(html);

// While loop - use when dont know how many time you want to run the loop.

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do while loop - for when you dont know how many times the loop will have to run. but it should run at least once

// var favCols = ["red", "blue", "white"];
// var i = 0;
// do {
//   console.log(i, favCols[i]);
//   i++;
// } while (i < favCols.length);

// for (var i = 0; i < favCols.length; i++) {
//   console.log(i, favCols[i]);
// }

//  Perform do and do-while = While is when you only want things to be done if something is the case and you dont know how many times these things will need to be done..  do while is when you're attempting to change your environment and you wan to perform actions until it has been changed sufficiently.

// Below is a for loop that will run in reverse order.
// var favCols = ["red", "blue", "white"];
// for (var i = favCols.length; i > 0; i--) {
//   console.log(i);
// }

// below loop allows you to count how often you count down in the loop i.e. 3 in this example
for (var i = 20; i > 0; ) {
  console.log(i);
  i = i - 3;
}
