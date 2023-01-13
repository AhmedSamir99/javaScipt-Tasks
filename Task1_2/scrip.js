

var result;


do{
var firstNumber=Number(prompt("Enter the first number:"));
var operator = prompt("Enter the operator");
var secondtNumber=Number(prompt("Enter the second number:"));
var flag=true;

if(isNaN(firstNumber) || isNaN(secondtNumber)){

    alert("Your didn't enter a number");
    flag=false;
}
else{

switch(operator){

 case('+'):
 result=firstNumber+secondtNumber;
 break;
 case('-'):
 result=firstNumber-secondtNumber;
 break;
 case('*'):
 result=firstNumber*secondtNumber;
 break;
 case('/'):
 result=firstNumber/secondtNumber;
 break;
 case('%'):
 result=firstNumber%secondtNumber;
 break;
 default:
    alert("You entred an invalid operation");
    flag=false;
}
}
}
while(!flag)
// while(!flag && firstNumber!='' && firstNumber!=null && secondtNumber!='' && secondtNumber!=null  )

if(flag)
alert(`Result: ${result}`);

//age!='' && age!=null