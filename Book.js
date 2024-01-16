
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');
    const Textcheck = document.getElementById('check');
    let new1 = "ChekcBox"
    let message = "Are You Agree For This Form "

    if (username === "Hadi Zaidi" && password === "Hadi@123"){
        if(Textcheck.checked){
         window.location.href = "http://127.0.0.1:5501/System-Desine/Home.html";       
        }else{
            let textitem = document.getElementById("textItemSet")
            textitem.innerHTML = `
            <div class="alert alert-${new1} alert-dismissible fade show" role="alert">
            <strong>Message: </strong>${message}
            <span type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></span>
          </div>
            `;
            textitem.style.color = "yellow";
            textitem.style.backgroundColor = "rgba(255, 123, 0, 0.571)";
            textitem.style.fontWeight = "bold";
            setTimeout(function() {
            textitem.innerHTML = ""
            textitem.style.backgroundColor = ""
         },4000);
            
        }
    } else if(username !== "Hadi Zaidi"){
        document.getElementById("username").style.borderColor = "red";
        text.innerHTML = "incorrect Username";
        text.style.color = "red";
        text.style.fontSize = "12px";
        setInterval(() => {
            document.getElementById("username").style.borderColor = "";
            text.innerHTML = "";
           text.style.color = "";
           text.style.fontSize = "";
          },5000);
         
        
    }
    else if(password !== "Hadi@123"){
      document.getElementById("password").style.borderColor = "red";
      Text.innerHTML = "incorrect Password";
      Text.style.color = "red";
      Text.style.fontSize = "12px";
      setInterval(() => {
        document.getElementById("password").style.borderColor = "";
        Text.innerHTML = "";
       Text.style.color = "";
       Text.style.fontSize = "";
      },5000);
    }
    
    
}

let Relode = document.getElementById("relode")
Relode.addEventListener("click",()=>{
    window.location.reload();
})
 