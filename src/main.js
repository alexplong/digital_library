import "./style.scss";
import Book from "./app/sandbox/newbook";
import renderPage from "./app/sandbox/render";

(() => {
  let myLibrary = [];
  if (localStorage.getItem("booksArray")) {
    myLibrary = Array.from(JSON.parse(localStorage.getItem("booksArray")));
    renderPage().showLibrary(myLibrary);
  } else {
    myLibrary = [];
  }

  // DOM elements
  const addBook = document.querySelector(".addBook");
  const bookForm = document.querySelector(".addForm");
  const showForm = document.querySelector(".popup");
  const exitPopup = document.querySelector(".exitPop");
  const container = document.querySelector(".container");

  // UI eventlisteners
  exitPopup.addEventListener("click", () => {
    showForm.classList.add("hide");
  });
  addBook.addEventListener("click", () =>
    showForm.classList.toggle("hide", !showForm.classList.contains("hide"))
  );

  // Functional eventlisteners
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let theTitles = myLibrary.map((item) => item.title);
    let theAuthors = myLibrary.map((item) => item.author);

    if (
      bookForm.children["Title"].value == "" ||
      bookForm.children["Author"].value == "" ||
      bookForm.children["Pages"].value == ""
    ) {
      console.log("Please fill in missing fields.");
    } else if (
      theTitles.includes(bookForm.children["Title"].value) &&
      theAuthors.includes(bookForm.children["Author"].value)
    ) {
      console.log(
        `The book: ${
          bookForm.children["Title"].value
        }, authored by ${theAuthors.includes(
          bookForm.children["Author"].value
        )} is already in your library`
      );
    } else {
      let newBook = new Book(
        bookForm.children["Title"].value,
        bookForm.children["Author"].value,
        bookForm.children["Pages"].value,
        bookForm.children[9].children["read"].checked
      );
      myLibrary.push(newBook); // push new object into Array
      renderPage().showBook(newBook); // run showBooks function
      localStorage.setItem("booksArray", JSON.stringify(myLibrary)); // update localStorage
      showForm.classList.add("hide"); // add hide class to popup
      bookForm.reset();
    }
  });

  container.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      let DeleteThisBook = event.target.parentNode.dataset.title;
      let x = myLibrary.findIndex((book) => book.title === DeleteThisBook);
      myLibrary.splice(x, 1);
      localStorage.setItem("booksArray", JSON.stringify(myLibrary));
      renderPage().deleteBook(DeleteThisBook);
    }

    if (event.target.classList.contains("Switch_Input")) {
      let bookRead = event.target.parentNode.parentNode.dataset.title;
      let x = myLibrary.findIndex((book) => book.title === bookRead);
      myLibrary[x].read = event.target.checked;
      localStorage.setItem("booksArray", JSON.stringify(myLibrary));
      console.log(myLibrary);
    }
  });
})();
