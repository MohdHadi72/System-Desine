
function attemptLogin() {
    const username = document.getElementById('username').value;
    const Mobile = document.getElementById('Mobile').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');

    if (username === "Hadi Zaidi" && Mobile === "8534007321"){
         window.location.href = "http://127.0.0.1:5501/Books/Book.html";

    } else if(username !== "Hadi Zaidi"){
        document.getElementById("username").style.borderColor = "red";
        text.innerHTML = "Incorrect Username";
        text.style.color = "red";
        text.style.fontSize = "10px";
         
        
    } else if(Mobile !== "853400321"){
      document.getElementById("Mobile").style.borderColor = "red";
      Text.innerHTML = "Incorrect Mobile Number";
      Text.style.color = "red";
      Text.style.fontSize = "10px";
    }
    
}

