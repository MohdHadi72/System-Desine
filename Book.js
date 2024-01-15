
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');
    const Textcheck = document.getElementById('check');
    const textColor = document.getElementById('textColor');

    if (username === "Hadi Zaidi" && password === "Hadi@123"){
        if(Textcheck.checked){
         window.location.href = "http://127.0.0.1:5501/System-Desine/Home.html";       
        }else{
            textColor.style.color = "red";
            textColor.innerHTML = "Your Are Agree For This Form";
           setTimeout(function() {
            textColor.innerHTML = "I'm Agree For This Form";
            textColor.style.color = "white";
         },2000);   
        }
    } else if(username !== "Hadi Zaidi"){
        document.getElementById("username").style.borderColor = "red";
        text.innerHTML = "incorrect Username";
        text.style.color = "red";
        text.style.fontSize = "12px";
         
        
    }
    else if(password !== "Hadi@123"){
      document.getElementById("password").style.borderColor = "red";
      Text.innerHTML = "incorrect Password";
      Text.style.color = "red";
      Text.style.fontSize = "12px";
    }
    
    
}

let Relode = document.getElementById("relode")
Relode.addEventListener("click",()=>{
    window.location.reload();
})
 