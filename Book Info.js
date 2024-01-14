// let Relode = document.getElementById("relode")
// Relode.addEventListener("click",()=>{
//     window.location.reload();
// });

function book(book, author , price , isbn ,type){
    this.book = book;
    this.author = author;
    this.price = price;
    this.isbn = isbn;
    this.type = type;
}

function Display(){

}

let libraryFormVal = document.getElementById("libraryForm");
libraryFormVal.addEventListener("submit", formSubmit);

function formSubmit(e){

    console.log("hellos");

 let BookVal   = document.getElementById("BookName").value;
 let AuthorVal = document.getElementById("AuthorName").value; 
 let PriceVal  = document.getElementById("PriceVal").value;
 let IsbnVal   = document.getElementById("ISBNCode").value;
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

let bookprint = new book(book,author,price,isbn,type);
console.log(bookprint);
 e.preventDefault();


}