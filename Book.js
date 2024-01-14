
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');

    if (username === "Hadi Zaidi" && password === "Hadi@123"){
         window.location.href = "http://127.0.0.1:5501/System-Desine/Home.html";

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
 