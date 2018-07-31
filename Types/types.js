/*
    There are seven different types in JavaScript. I am
    sure you already know these, but there are some 
    I am learning for the first time. Its important to 
    remember that JavaScript is dynamically typed opposed 
    to strongly typed. So it interperts the type.

    Java
    String name = "kyle";

    JavaScript
    var name = "kyle";
*/


/*
    Boolean can hold two different values "true" or "false".
    These are used alot in conditionals and while loops.
*/

var flag = true;

if (flag){
    console.log("True");
}
else{
    console.log("False");
}

// infinite while loops can be done with booleans

/*
while(flag){
    console.log("Hello World");
}
*/


/* 
    Undefined vs Null. Undefined in JavaScript is where a 
    variable is declared but not assigned a value. Null
    is an assigned value of Null. I didnt know the difference.
*/
console.log("____Undefined&Null____");

var either;
var happiness = null;

console.log(either);
console.log(happiness);


console.log("____Numbers&Strings____");
/* 
    Number and String are self explanitory. Strings always
    need to be in quotes. numbers do not.
*/

var number = 123;
var string = "String";

console.log(number);
console.log(string);

/*
    Symbol. This one I did not know. They are newly introduced
    in ES6. I think I will go over them later. I am not sure
    how they work or what the purpose are yet.
*/

/* 
    Objects are like variables but they can hold a lot
    of information. Information is stored in key value 
    pairs

    <Key>: "<Value>"

*/

console.log("____Objects____");
var roomate = {
    FirstName: "Kyle",
    LastName: "Burger",
    Age: 23
}

// There are two ways to access the information dot notation
// and bracket notation. I will use dot notation because 
// I like it better.

console.log(roomate.FirstName);
console.log(roomate.Age);
console.log(roomate.LastName);


/*
    Last thing if you want to get the type of an object
    you can use typeof.
*/
console.log("___getting types__");
console.log(typeof flag );
console.log(typeof either );
console.log(typeof happiness); // apparently null is object type
console.log(typeof number);
console.log(typeof string);
console.log(typeof roomate);

