function Book(book, Author, Price, Isbn, type) {
  this.book = book;
  this.Author = Author;
  this.Price = Price;
  this.Isbn = Isbn;
  this.type = type;
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
        <td><button class="btn btn-danger" id="remove" onclick="deleteBook('${book.Isbn}')">Delete</button>
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

let libraryFormVal = document.getElementById("libraryForm");
libraryFormVal.addEventListener("submit", function (e) {
  e.preventDefault();
  info();
});

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

function displayBooks() {
  let displayValcheck = new Display();
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";


  booksArray.forEach(function (book) {
    displayValcheck.add(book);
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
