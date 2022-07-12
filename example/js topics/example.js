// var a=10;

// function abc(){
// var a=11;
// console.log(a)
// }
// abc();

var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(arr)];
}
console.log(removeDuplicates(arr));
// var foo = "Foo";  // globally scoped
// let bar = "Bar"; // not allowed to be globally scoped

// console.log(window.foo); // Foo
// console.log(window.bar); // undefined