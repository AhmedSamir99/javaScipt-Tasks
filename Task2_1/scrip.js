var numberOfIteration=Number(prompt("Enter the number of numbers"));

var array=[];
var sum=0;
var avg;
for(var i=0;i<numberOfIteration;i++){

    var input=Number(prompt(`Enter n${i+1}:`));
    if(!isNaN(input)){
        array.push(input);
        sum+=array[i];
    }    

}
avg=sum/array.length;

alert(`sum=${sum}\naverage=${avg}`);



// function sumofarray(){

//     var n=array.length
//     for(var i;i<n;i++){       
        
//        sum+=array[i];

//     }
//     return sum;

// }
// function avgofarray(){

//     return (sum/array.length);

// }