$(document).ready(function(){
  $("#form1").submit(function(event){

    event.preventDefault();
    let userNumber = $("#number").val();
    let beepArray=beepBoop(userNumber)
    beepArray.forEach(function(num){
      $("#output").append("<li>" + num + "</li>")
    });
  });
  $("#reset").click(function(){
    console.log("reset clicked");
    list = [];
    console.log(list);
    document.getElementById("output");
      while ("#output".hasChildNodes()) {
        list.removeChild(list.firstChild);
      }   
  })

});
let list =[]
function beepBoop(userInput){
  if (isNaN(userInput)) {
    alert("enter a real number my dude!")
    console.log(userInput)
    return;
  }
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

// function clear() {
//   console.log("button clicked");
//   var list = document.getElementById("output");
//   while (list.hasChildNodes()) {
//     list.removeChild(list.firstChild);
//   }
// }










