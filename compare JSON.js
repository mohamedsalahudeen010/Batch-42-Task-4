// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  var obj1={
      "name":"person 1",
      "age": 5
    };
    var obj2={
        "age": 5,
      "name":"person 1"
     };
     function compareJSON(obj1,obj2){
         if (JSON.stringify(obj1)!=JSON.stringify(obj2)){
       console.log (false);
   }
       else{ console.log(true)
       }
       return result
     }
     
     compareJSON(obj1,obj2);

     //-------------OR---------------//

     console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
 });





