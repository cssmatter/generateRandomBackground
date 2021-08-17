var color = document.getElementById('counter');
var bodyTag = document.getElementsByTagName("BODY")[0];

counterData = 0;

function generateNumber(countertype){
  
    number = Math.random().toString(12).slice(2, 8)
    bodyTag.style.background = `#${number}`
    
    color.innerHTML = `#${number}`
   
}
