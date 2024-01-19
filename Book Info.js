let maindiv = document.getElementById("main");
let booksArray = [];

function Book(book, Author, Price, Isbn, type) {
    this.book = book;
    this.Author = Author;
    this.Price = Price;
    this.Isbn = Isbn;
    this.type = type;
    this.isRented = false; // Added property to track rental status
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
            <td>${book.type}</td>
            <td>
                <button class="btn btn-danger" id="remove" onclick="deleteBook('${book.Isbn}')">Delete</button>
            </td>
            <td>      
                <button class="btn btn-success" id="rent" onclick="rentBook('${book.Isbn}')">Rent</button>
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
   
    let type;

    let ProgramingText = document.getElementById("Programing");
    let english = document.getElementById("English");
    let science = document.getElementById("Science");

    if (ProgramingText.checked) {
        type = ProgramingText.value;
    } else if (english.checked) {
        type = english.value;
    } else if (science.checked) {
        type = science.value;
    }

    const BookNameVal = new Book(BookVal, AuthorVal, PriceVal, IsbnVal, type);

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

// let mesgText = document.getElementById("textMesg");
// let mesgTextMonths = document.getElementById("RentMonths");

function rentBook(isbn) {
    let months = prompt("enter Nonts")
    months = parseInt(months);

    if (!months || months <= 0) {
        alert("Please enter a valid number of months.");
        return;
    }

    let rentedBook = booksArray.find((book) => book.Isbn === isbn);
    if (rentedBook) {
        rentedBook.isRented = true;
        rentedBook.rentMonths = months;
        saveStorage(booksArray);
        displayBooks();
        Messag.innerHTML = `Book ${rentedBook.book} has been rented for ${months} months.`;
    }
}




function displayBooks() {
    let ValueForDisplay = new Display();
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    booksArray.forEach(function (book) {
        ValueForDisplay.add(book);
    });

    let rentedBooksDiv = document.getElementById("main");
    rentedBooksDiv.innerHTML = ""; 

    booksArray.forEach(function (book) {
        if (book.isRented) {
            rentedBooksDiv.innerHTML += `<div class="items">
            <div id="Messag"></div>         
                <h4>Book Name</h4>
                <div>${book.book}</div>
                <h4>Months</h4>
                <div>${book.rentMonths}</div>
              </div>`;
        } 
       
    });
   
}

let Reload = document.getElementById("reload");
Reload.addEventListener("click", function () {
    window.location.reload();
});

function LocalStorage() {
    let library = localStorage.getItem("library");
    return library ? JSON.parse(library) : [];
}

function saveStorage(library) {
    localStorage.setItem("library", JSON.stringify(library));
}

window.addEventListener("load", function () {
    booksArray = LocalStorage();
    displayBooks();
});

let ByIconColorChange = document.getElementById("colorChangeBy");
let bodyColor = document.getElementById("whiteColorForBody");
let colorLength = ["white", "wheat"];

ByIconColorChange.addEventListener("click", () => {
    let randoumColor = colorLength[Math.floor(Math.random() * colorLength.length)];
    bodyColor.style.backgroundColor = randoumColor;
    bodyColor.style.color = "black";
    spanColor.style.color = "red";
});

let fonst = document.getElementById("fonst");
let fonstHeader = document.getElementById("header");
let fonstH1 = document.getElementById("H1Teg");
let fonstTagTxt = document.getElementById("tegTxt");

let fosntFamily = ["Courier New", "Times New Roman", "sans-serif", "cursive"];

fonst.addEventListener("click", () => {
    let RandoumFamily = fosntFamily[Math.floor(Math.random() * fosntFamily.length)];
    bodyColor.style.fontFamily = RandoumFamily;
    fonstHeader.style.fontFamily = RandoumFamily;
    fonstH1.style.fontFamily = RandoumFamily;
    fonstTagTxt.style.fontFamily = RandoumFamily;
    bodyColor.style.fontSize = "20px";
});
