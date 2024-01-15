let Relode = document.getElementById("relode")
Relode.addEventListener("click",()=>{
    window.location.reload();
});



function Book(book,Author,Price,Isbn,type){
    this.book = book;
    this.Author = Author;
    this.Price = Price;
    this.Isbn = Isbn;
    this.type = type;
}


function display(){

}


display.prototype.add = function(book){
    TbleBody = document.getElementById("tableBody");
    let AddTable = `
        <tr>  
               <td>${book.book}</td>
               <td>${book.Author}</td>
               <td>${book.Price}</td>
               <td>${book.Isbn}</td>
               <td>${book.type}</td>
        </tr>
       
    
    `;
    TbleBody.innerHTML += AddTable;
  
}


display.prototype.clear = function(){
    let libraryFormVal = document.getElementById("libraryForm");
    libraryFormVal.reset();
}

display.prototype.validata = function(book){
   if(book.book.length<2 || book.Author.length<2 || book.Isbn.length<2){
    return false;
   }
   else{
    return true;
   }
}
display.prototype.show = function(type,displayMessage){
   let printmesg =  document.getElementById("Message");
   printmesg.innerHTML = `
   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${displayMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&tiems;</span>
  </button>
   </div>

`;
   setInterval(function() {
    printmesg.innerHTML = ""
   }, 2000);
   
//    saveDataIn();
}



let libraryFormVal = document.getElementById("libraryForm");
libraryFormVal.addEventListener("submit",info);
let newBooks = []
function info(e){

 const BookVal   = document.getElementById("BookName").value;
 const AuthorVal = document.getElementById("AuthorName").value; 
 const PriceVal  = document.getElementById("PriceVal").value;
 const IsbnVal   = document.getElementById("ISBNCode").value;
 let type;


 let  ProgramingText = document.getElementById("Programing");
 let  english        = document.getElementById("English");
 let  scince         = document.getElementById("Science");


if(ProgramingText.checked){
    type = ProgramingText.value;
}


else if(english.checked){
    type = english.value;
}

else if(scince.checked){
    type = scince.value;
}



 const BookNameVal = new Book(BookVal,AuthorVal,PriceVal,IsbnVal,type);


newBooks.push(BookNameVal);


let displayValcheck = new display();

if(displayValcheck.validata(BookNameVal)){
  displayValcheck.add(BookNameVal);
  displayValcheck.clear();
  displayValcheck.show('Success' , "Your Book Has Been SuccessFully Add");
  

}else{
  displayValcheck.show("Danger","Sorry You Can not Add This Book");
  
 }
e.preventDefault();

}


function validateText(input){
    let inputValue = input.value;
    let cleanValue = inputValue.replace(/[^A-Za -z]/g, '');
    input.value = cleanValue;
};

function getLibraryFromLocalStorage(){
        let library = localStorage.getItem('library');
        return library ? JSON.parse(library) : [];
    }

    function saveLibraryToLocalStorage(library){
        localStorage.setItem('library', JSON.stringify(library));
    }
