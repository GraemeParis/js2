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
// for (var i = 20; i > 0; ) {
//   console.log(i);
//   i = i - 3;
// }

// Break and continue -
// Break stops the current loop
// var favCols = ["red", "blue", "white"];
// for (var i = 0; i < favCols.length; i++) {
//   console.log(i);

// below example attempts to find red and when it does it stops (breaks) the loop
//   if (favCols[i] === "red") {
//     console.log("Red found");
//     break;
//   }
// }

//   if (favCols[i] === "red") {
//     console.log("Red found");
//     continue;
//   }
// }

//functions - code that is put in a box. it's given a name and can be called in future.
// these are a plan for how we will handle things in future and may not know the circumstances or have all the information.
// ways of performing the same action again and again - results vary depending on input.

// function add() {
//   console.log("hello");
// }

// add();
// add();
// add();]

//declarations
// function add(x, y) {
//   console.log(x + y);
// }

// add(1, 2);
// add(3, 4);

// //expression
// var add = function (x, y) {
//   console.log(x + y);
// };

// add(1, 2);
// add(3, 4);

// below example allows for if statement to be added to function to determine number and respond with value based on validation
// function add(x, y) {
//   if (x + y > 10) {
//     console.log("big number");
//   } else {
//     console.log("small number");
//   }
// }
// add(1, 20);

// anonomous function

// function sayHi(first, last) {
//   console.log(first, last);
// }

// sayHi("Graeme", "Paris");
// sayHi("Zoe", "Stewart");

// Arguments object - console.log(arguments); lets you see what arguments used.

// function sayHi(first, last) {
//   return first + " " + last;
// }

// console.log(sayHi("Graeme", "Paris"));

// // return is closing the function and sending the value based on function called in console.log. anything that appears post retrun still in the function is lost/ignored
// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2));

// Resolving - each time a function is called it will resolve with the return value of the function. If nothing can be resolved/returned it will resolve with undefined.

// Below example of function allows you to create HTML by looking at function arguments.
// var family = [
//   {
//     name: "Graeme",
//     age: 37,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
//   {
//     name: "Zoe",
//     age: 35,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
// ];

// function generatePersons(name, age) {
//   var html = "<div" + "><p>" + name + "</p><p>" + age + "</p></div>";

//   return html;
// }

// // var html = "";
// // for (var i = 0; i < family.length; i++) {
// //   html += generatePersons(family[i].name, family[i].age);
// // }

// // console.log(html);

// function generatePersons(name, age) {
//   return "<div" + "><p>" + name + "</p><p>" + age + "</p></div>";
// }

//array methods
var cols = ["red", "blue", "white"];
var cols2 = ["orange", "pink", "purple"];
// cols.forEach(function (col) { // for each lets you for a for lopp without the complex function arguments starting position etc
//   console.log(col);
// });
// cols.pop(); // removes the last item from the array
// cols.unshift("red"); // reverts the order of the array
// cols.push("red"); // allows you to add value to end of array. i.e. red
// cols.shift(); // removes the first item from the array
// cols.splice(2, 1); // removes the item at index 2 from the array
//cols.slice(0, 1); // returns a copy of the array
//cols.reverse(); // reverses the order of the array
//var allCols = cols.concat(cols2); // allows you to concat multiple arrays
//console.log(cols);
//console.log(allCols);
//console.log(cols.join("-")); // removes the quotes and allows you to add some delimiters within the ""
//console.log(cols.includes("red")); // lets you know if the array contains a specific values. e.g. strings, numbers boolean
// var indexOf = cols.indexOf("red"); // lets me know where red is
// cols.splice(indexOf, 1); // removes the red from the array
// console.log(cols);

//every - checks if all the items in the array pass the callback function.
// var ages = [10, 20, 30, 40, 50];
// function callback(item) {
//   return item > 18;
// }

// console.log(ages.every(callback));

//some - checks if any of the items in the array pass the callback function.
// var ages = [10, 20, 30, 40, 50];
// function callback(item) {
//   return item > 18;
// }

// console.log(ages.some(callback));

// filtered - lets you look for items that pass the callback function
// var family = [
//   {
//     name: "Graeme",
//     age: 37,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
//   {
//     name: "Zoe",
//     age: 35,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
//   {
//     name: "Lily",
//     age: 14,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
// ];

// function callBack(item) {
//   return item.age > 18;
// }

// var person = family.findIndex(callBack);

// console.log(person);

// find index only works on objects. index of works on primatives.
// var family = [
//   {
//     name: "Graeme",
//     age: 37,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
//   {
//     name: "Zoe",
//     age: 35,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
//   {
//     name: "Lily",
//     age: 14,
//     isHappy: true,
//     favCols: ["red", "blue", "white"],
//     location: { postCode: "KA3 6EE", city: "Kilmarnock" },
//   },
// ];

// function callBack(item) {
//   return item.age > 18;
// }

// var person = family.findIndex(callBack);

// console.log(person);

// sort

// var product = [
//   { id: 1, title: "PS5", price: 200 },
//   { id: 2, title: "Switch", price: 150 },
//   { id: 3, title: "Xbox", price: 400 },
// ];

// function callBack(firsItem, secondItem, thirdItem) {
//   if (firsItem.price > secondItem.price) {
//     return 1;
//   }
//   if (firsItem.price < secondItem.price) {
//     return -1;
//   }
//   return 0;
// }

// product.sort(callBack);
// console.log(product);

// map method

var product = [
  { id: 1, title: "PS5", price: 200 },
  { id: 2, title: "Switch", price: 150 },
  { id: 3, title: "Xbox", price: 400 },
  { id: 4, title: "Steam Deck", price: 450 },
];

var html = product.map(function (item) {
  return (
    "<div><p>" +
    item.title +
    "</p><p>&pound;" +
    Math.round(item.price) +
    "</p></div>"
  );
});

console.log(html.join(" "));

// find the item in the dom
var domRef = document.getElementById("root");
console.log(domRef);

// inseret the html into the item i just found
domRef.innerHTML = html.join("");
