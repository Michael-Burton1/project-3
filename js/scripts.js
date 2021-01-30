$(document).ready(function(){
  $("#form1").submit(function(event){

    event.preventDefault();
    let userNumber = $("#number").val();
    let beepArray=beepBoop(userNumber)
    beepArray.forEach(function(num){
      $("#output").append("<li>" + num + "</li>")
    });
  });
 
});
let Numbers =[]
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
    Numbers.push(replace); 
  }
  return Numbers
}

function clearIt() {
  console.log("button clicked");
  var list = document.getElementById("output");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  Numbers = []
};









