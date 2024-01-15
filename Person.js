
function attemptLogin() {
    const usernameVal = document.getElementById('username').value;
    const MobileVal = document.getElementById('Mobile').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');
    const textcheck = document.getElementById('check');

    if (usernameVal === "Hadi Zaidi" && MobileVal === "8534007321"){
      if(textcheck.checked){
        window.location.href = "http://127.0.0.1:5501/System-Desine/Book.html";   
       }else{
           textColor.style.color = "red";
           textColor.innerHTML = "Your Are Agree For This Form";
          setTimeout(function() {
           textColor.innerHTML = "I'm Agree For This Form";
           textColor.style.color = "white";
        },2000);   
       }
    } else if(usernameVal !== "Hadi Zaidi"){
        document.getElementById("username").style.borderColor = "red";
        text.innerHTML = "Incorrect Username";
        text.style.color = "red";
        text.style.fontSize = "10px";
         
        
    }  
     else if(Mobile !== "8534007321"){
      document.getElementById("Mobile").style.borderColor = "red";
      Text.innerHTML = "Incorrect Mobile Number";
      Text.style.color = "red";
      Text.style.fontSize = "10px";
    }
  }


let Relode = document.getElementById("relode")
Relode.addEventListener("click",()=>{
    window.location.reload();
})



function validateText(input){
  let inputValue = input.value;
  let cleanValue = inputValue.replace(/[^A-Za -z]/g, '');
  input.value = cleanValue;
};
