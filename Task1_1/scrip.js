const Username = "admin";
const Password = "421$$”";

// var a="admins";
// var b="421sd$$”";

var a=prompt("Enter your Username:");
var b=prompt("Enter your Password");

if (a === Username && b===Password) {
  // true
  alert("Welcome");
}
else{
    if(a!== Username)
     alert("Incorrect Username")
    if(b!==Password)
     alert("Incorrect Password")

}
// } else if (a  b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
