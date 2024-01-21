
let booksArray = [];

function Book(book, Author, Price, Isbn,BookCount,type) {
    this.book = book;
    this.Author = Author;
    this.Price = Price;
    this.Isbn = Isbn;
    this.BookCount = BookCount;
    this.type = type;
    this.isRented = false;
}

function Display() {}

Display.prototype.add = function (book) {
    let tableBody = document.getElementById("tableBody");
    let tableRow = `
        <tr>  
            <td>${book.book}</td>
            <td>${book.Author}</td>
            <td>${book.Price}</td>
            <td>${book.Isbn}</td>
            <td>${book.BookCount}</td>         
            <td>${book.type}</td>    
            <td>
                <button class="btn btn-danger" id="remove" onclick="deleteBook('${book.Isbn}')">Delete</button>
            </td>
            <td>      
                <button class="btn btn-success" id="rent" onclick="rentBook('${book.Isbn}')">Rent</button>
            </td>
            <td>      
            <button class="btn btn-success" id="EditBook" onclick="rentBook('${n}')">Edite</button>
        </td>
        </tr>
    `;

    tableBody.innerHTML += tableRow;

};

Display.prototype.clear = function () {
    let libraryFormVal = document.getElementById("libraryForm");
    libraryFormVal.reset();
};

Display.prototype.validate = function (book) {
    return book.book.length >= 2 && book.Author.length >= 2 && book.Isbn.length >= 2;
};

Display.prototype.show = function (type, displayMessage) {
    let printMessage = document.getElementById("Message");
    printMessage.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message:</strong> ${displayMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    printMessage.style.backgroundColor = "red";

    setTimeout(function () {
        printMessage.innerHTML = "";
    }, 2000);
};

function info() {
    const BookVal = document.getElementById("BookName").value;
    const AuthorVal = document.getElementById("AuthorName").value;
    const PriceVal = document.getElementById("PriceVal").value;
    const IsbnVal = document.getElementById("ISBNCode").value;
    const BookCout = document.getElementById("BookCount").value;

    let type;

    let ProgramingText = document.getElementById("Programing");
    let english = document.getElementById("English");
    let science = document.getElementById("Science");

    if (ProgramingText.checked) {
        type = ProgramingText.value;
    }
     else if (english.checked) {
        type = english.value;
    }
     else if (science.checked) {
        type = science.value;
    }

    const BookNameVal = new Book(BookVal, AuthorVal, PriceVal,IsbnVal,BookCout, type);

    let displayValcheck = new Display();

    if (displayValcheck.validate(BookNameVal)) {
        displayValcheck.add(BookNameVal);
        displayValcheck.clear();
        displayValcheck.show("success", "Your Book Has Been Successfully Added");

        booksArray.push(BookNameVal);
        saveStorage(booksArray);
    } else {
        displayValcheck.show("danger", "Sorry, You Cannot Add This Book");
    }
}

function validateText(input) {
    let inputValue = input.value;
    let cleanValue = inputValue.replace(/[^A-Za-z ]/g, "");
    input.value = cleanValue;
}

function deleteBook(isbn) {
    booksArray = booksArray.filter((book) => book.Isbn !== isbn);
    saveStorage(booksArray);
    displayBooks();
}


// rent book for users 


// rent book for users 

function rentBook(isbn) {
    let rentedBook = booksArray.find((book) => book.Isbn === isbn);
    if (rentedBook) {
        if (rentedBook.BookCount <= 0) {
            return   alert("Sorry, this book is not available for rent. It's out of stock");
        } else if (rentedBook.isRented) {
          return  alert("This book is already rented.");
        } else {
            let months = prompt("Enter Months");
            months = parseInt(months);

            if (!months || months <= 0) {
               return  alert("Please enter a valid number of months.");
            }
            rentedBook.isRented = true;
            rentedBook.rentMonths = months;
            rentedBook.BookCount -= 1;
            saveStorage(booksArray);
          return  displayBooks();
           

        }
    }
}
function displayBooks() {
    let ValueForDisplay = new Display();
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    booksArray.forEach(function (book) {
        ValueForDisplay.add(book);
    });

    let rentedBooksDiv = document.getElementById("rentedBooksDisplay");
    rentedBooksDiv.innerHTML = "";


    booksArray.forEach(function (book, i){
        if (book.isRented) {

            let totalAmount = book.Price*book.rentMonths; 

            rentedBooksDiv.innerHTML += `<div class="itmes">      
                <h4>Book Name</h4>
                <div>${book.book}</div>
                <h4>Months</h4>
                <div>${book.rentMonths}</div>
                <h4>Total Amounts</h4>
                <div>${totalAmount}</div>           
                <button class="btn btn-success" id="return" onclick="remove('${i}')">Return</button>
               
            </div>`;

        };
        
    });


}            

function remove(index) {
booksArray[index].BookCount +=1;    
booksArray[index].isRented = false;
booksArray[index].rentMonths = 0;
saveStorage(booksArray);
displayBooks();

}

function saveStorage(library) {
localStorage.setItem("library", JSON.stringify(library));
}
function LocalStorage() {
let library = localStorage.getItem("library");
return library ? JSON.parse(library) : [];
}
window.addEventListener("load", function () {
booksArray = LocalStorage();
displayBooks();
});


let colorChange = document.getElementById("colorChangeByIcon");

let navBar = document.getElementById("bodyFonst");
let nav = document.querySelector("nav");
let fonstBody = document.getElementById("fonst");


let colors = ["red","yellow","aqua","orange",];
let fontfalmily = ["Courier New","Gill Sans MT","Trebuchet MS","Times New Roman","cursive","monospace","Helvetica"];

colorChange.addEventListener("click",()=>{
    let RandomColor = colors[Math.floor(Math.random() * colors.length)];
    main.style.backgroundColor = RandomColor;
    main.style.color = "black";
});

fonstBody.addEventListener("click",()=>{
    let RandomColor = fontfalmily[Math.floor(Math.random() * fontfalmily.length)];
    navBar.style.fontFamily = RandomColor;
    main.style.fontSize = "20px";
    nav.style.fontFamily = RandomColor;
   
   
})

