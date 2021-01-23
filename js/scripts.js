$(document).ready(function(){
  $("#form1").submit(function(event){
    console.log("#form1");
    event.preventDefault();

    for(let index=0;index<"form1"+1; index+=1){
      console.log(index)
  }
  
  });

  
});