var arr = [];
do{
    var op = prompt("Please enter your phone book operation (add, search)");
    switch(op){
        case 'add':
            var namee = prompt("Please enter the name of the contact");
            var phoneNum = prompt("Please enter the phone number of the contact");
            var newContact ={  "Name": namee,
                                "phoneNumber": phoneNum
                            };
            arr.push(newContact);
            break;
        case 'search':
            var searchOp = prompt("Do you want to search for a name or phone ?");
            if(searchOp=='name'){
                var searchName = prompt("Please enter the name");
                var result = arr.findIndex(function(item){
                    return item.Name==searchName;
                });
            }
            else if(searchOp=='phone'){
                var searchPhone = prompt("Please enter the phone");
                var result = arr.findIndex(function(item){
                    return item.phoneNumber==searchPhone;
                });
            }
            if(result<0){
                alert("Did not find");
            }
            else{
                alert("Name: "+arr[result].Name+", phone: "+arr[result].phoneNumber);
            }
            break;
    }
    var answer = confirm("Do you want new operation ?");
}while(answer);





// var exit="exit";
// var operation
// do{
//     operation=prompt('Enter the operation:');

// var phonebook=[];

// switch(operation){

//     case('add'):
//     var namef=prompt('Enter the name:');
//     var number=prompt('Enter the number:');
//     var Contact={
//         "objname":namef,
//         "objnumber":number
//     }
//     phonebook.push(Contact);

//     break;

//     case('search'):
//         var searchOp = prompt("Do you want to search for a name or phone ?");
//             if(searchOp=='name'){
//                 var searchName = prompt("Please enter the name");
//                 var result = phonebook.findIndex(function(item){
//                     return item.objname==searchName;
//                 });
//             }
//             else if(searchOp=='phone'){
//                 var searchPhone = prompt("Please enter the phone");
//                 var result = phonebook.findIndex(function(item){
//                     return item.objnumber==searchPhone;
//                 });
//             }
//             if(result<0){
//                 alert("Did not find");
//             }
//             else{
//                 alert("Name: "+phonebook[result].objname+", phone: "+phonebook[result].objnumber);
//                 console.log("Name: "+phonebook[result].objname+", phone: "+phonebook[result].objnumber)
//             }

//         break;
//     case('exit'):
//         break;

//     default:
//         alert("Invalid operation");

// }
// }
// while(operation!="exit")