let input = document.getElementById('inputText');
let data = input.value;
document.getElementById('buttonText').addEventListener('click', ()=>{
   
localStorage.setItem("data", input.value);
input.value = "";
})