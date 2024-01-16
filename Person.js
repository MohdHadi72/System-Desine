
function LoginForm(){
    const usernameVal = document.getElementById('username').value;
    const MobileVal = document.getElementById('mobile').value;
    const text = document.getElementById('text');
    const Text = document.getElementById('Text');
    const textcheck = document.getElementById('check');
  

    let new1 = "ChekcBox"
    let message = "Are You Agree For This Form"

    if (usernameVal === "Hadi Zaidi" && MobileVal === "8534007321"){
      if(textcheck.checked){
        window.location.href = "http://127.0.0.1:5501/System-Desine/Book.html";   
       }else{
            let textitem = document.getElementById("txtItem");
            textitem.innerHTML = `
            <div class="alert alert-${new1} alert-dismissible fade show" role="alert">
            <strong>Message: </strong>${message}
            <span type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></span>
          </div>
          `;
            textitem.style.color = "yellow";
            textitem.style.backgroundColor = "rgba(255, 123, 0, 0.571)";
            textitem.style.fontWeight = "bold";
             
            setTimeout(function(){
              textitem.innerHTML = "";
              textitem.style.backgroundColor = "";

         },4000);
       }

    } else if(usernameVal !== "Hadi Zaidi"){
        document.getElementById("username").style.borderColor = "red";
        text.innerHTML = "Incorrect Username";
        text.style.color = "red";
        text.style.fontSize = "17px";
        setInterval(() => {
          document.getElementById("username").style.borderColor = "";
          text.innerHTML = "";
        text.style.color = "";
        text.style.fontSize = "";
        },5000);
         
        
    }else if(MobileVal !== "8534007321"){
      document.getElementById("Mobile").style.borderColor = "red";
      Text.innerHTML = "Incorrect Mobile Number";
      Text.style.color = "red";
      Text.style.fontSize = "17px";
      setInterval(() => {
        document.getElementById("Mobile").style.borderColor = "";
        Text.innerHTML = "";
       Text.style.color = "";
       Text.style.fontSize = "";
      },5000);
    }
  }


let Relode = document.getElementById("relode")
Relode.addEventListener("click",()=>{
    window.location.reload();
});



function validateText(input){
  let inputValue = input.value;
  let cleanValue = inputValue.replace(/[^A-Za -z]/g, '');
  input.value = cleanValue;
};
