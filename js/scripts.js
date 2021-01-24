$(document).ready(function(){
  $("#form1").submit(function(event){

    event.preventDefault();
    let userNumber = $("#number").val();
    let beepArray=beepBoop(userNumber)
    beepArray.forEach(function(num){
      $("#output").append("<li>" + num + "</li>")
    });
    
  
  })


 
});

function beepBoop(userInput){
  let list =[]
  for(let i=0; i<=userInput; i++){
    let replace = i
    if (i.toString().includes(1)){
       replace="beep";      
    }
    if (i.toString().includes(2)){
       replace="boop"; 
    }
    if (i.toString().includes(3)){
      replace="Won't you be my neighbor?"; 
    }
    list.push(replace);
    
  }
  return list
}












 // let array=["1","2","3","4","5","6"]
  //  let string= "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15";
  //  let myArray=string.split("");
  // // for(let i=0; i<myArray.length; i++) { myArray[i] = parseInt(myArray[i], 10);
  // // if 
  // let newArray=[];
  // myArray.forEach(function(number){
  //   if ("1".includes(number)) {
  //     newArray.push("beep");
  //   }else{
  //     newArray.push(number);
  //   }
  // }
//  }

// }
