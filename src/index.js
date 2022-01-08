// // Variables
// let myLibrary = [];

// if (localStorage.getItem("booksArray")) {
//   myLibrary = Array.from(JSON.parse(localStorage.getItem("booksArray")));
// } else {
//   myLibrary = [];
// }

// // DOM elements
// const addBook = document.querySelector(".addBook");
// const container = document.querySelector(".container");
// const bookForm = document.querySelector(".addForm");
// const showForm = document.querySelector(".popup");
// const exitPopup = document.querySelector(".exitPop");

// Book Constructor function
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// // Function added to Prototype of Book constructor
// Book.prototype.info = function () {
//   if (this.read) {
//     return `${this.title} by ${this.author}, ${this.pages} pages read`;
//   } else {
//     return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
//   }
// };

// Manually adding two books to library
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
// const sorcerersStone = new Book("Harry Potter and The Sorcerer's Stone", "J.K. Rowling", "350", true);
// myLibrary.push(theHobbit, sorcerersStone)

// // Popup event listeners
// addBook.addEventListener("click", () => {
//   console.log("click");
//   let popUpToggle = showForm.classList.contains("hide");
//   showForm.classList.toggle("hide", !popUpToggle);
// });

// exitPopup.addEventListener("click", () => {
//   showForm.classList.add("hide");
// });

// // Submit button on form creates a new Book object and pushes it into the Array
// // Also calls the showBooks function which leads to repeat of books already in the Array as cards
// bookForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // stop submit from refreshing the page
//   let theTitles = myLibrary.map((item) => item.title);
//   let theAuthors = myLibrary.map((item) => item.author);

//   // console.log(e.target["Title"].value.includes())
//   if (
//     e.target["Title"].value == "" ||
//     e.target["Author"].value == "" ||
//     e.target["Pages"].value == ""
//   ) {
//     // empty fields check
//     console.log("Please fill in missing fields.");
//   } else if (
//     theTitles.includes(e.target["Title"].value) &&
//     theAuthors.includes(e.target["Author"].value)
//   ) {
//     // duplicate in Array check
//     console.log("Book is already in library");
//   } else {
//     // empty & duplicates false > input into Array
//     let addANewBook = new Book(
//       e.target["Title"].value,
//       e.target["Author"].value,
//       e.target["Pages"].value,
//       e.target["read"].checked
//     );

//     myLibrary.push(addANewBook); // push new object into Array
//     showBooks(); // run showBooks function
//     showForm.classList.add("hide"); // add hide class to popup
//     bookForm.reset();
//   }
// });

// // Loop through Arrays and add to Cards
// const showBooks = () => {
//   let verifyTitles = Array.from(document.querySelectorAll("h4.title")).map(
//     (a) => a.textContent
//   ); // Map an Array of book titles from Nodelist for title check

//   myLibrary.forEach((book) => {
//     if (!verifyTitles.includes(book.title)) {
//       // if title from Array does not match any from Nodelist of titles on DOM > make a new card
//       // let bookIndex = myLibrary.map(item => item.title).indexOf(book.title);
//       // all elements to make a new card & attributes for function in later functions
//       let newCard = document.createElement("div");
//       let cardTitle = document.createElement("h4");
//       let authorDiv = document.createElement("div");
//       let cardAuthor = document.createElement("p");
//       let authorSpan = document.createElement("span");
//       let pageDiv = document.createElement("div");
//       let cardPage = document.createElement("p");
//       let pageSpan = document.createElement("span");
//       let readLabel = document.createElement("div");
//       let readDiv = document.createElement("div");
//       let cardReadT = document.createElement("label");
//       let cardReadButton = document.createElement("input");
//       let switchButton = document.createElement("div");
//       let cardDeleteButton = document.createElement("button");
//       newCard.setAttribute("class", "card");
//       newCard.classList.toggle("read", book.read); // sets Read CSS classList based on whether box is checked or not
//       cardReadButton.checked = book.read;
//       // newCard.setAttribute('data-key', bookIndex); // not reliable since it will change over time

//       cardReadButton.setAttribute("class", "read-button");
//       cardReadButton.setAttribute("type", "checkbox");
//       cardReadT.setAttribute("class", "switch-wrap");
//       switchButton.setAttribute("class", "switch");
//       cardDeleteButton.setAttribute("class", "delete-button");
//       readLabel.setAttribute("class", "readLabel");
//       cardTitle.textContent = `${book.title}`;
//       cardAuthor.textContent = `by `;
//       authorSpan.textContent = ` ${book.author}`;
//       pageSpan.textContent = ` ${book.pages}`;
//       cardPage.textContent = ` pages`;

//       cardDeleteButton.textContent = "X";

//       cardTitle.setAttribute("class", "title");
//       cardAuthor.setAttribute("class", "author");
//       cardPage.setAttribute("class", "page");
//       authorDiv.setAttribute("class", "authorDiv");
//       pageDiv.setAttribute("class", "pageDiv");
//       readDiv.setAttribute("class", "readDiv");

//       newCard.appendChild(cardTitle);
//       authorDiv.appendChild(cardAuthor);
//       authorDiv.appendChild(authorSpan);
//       newCard.appendChild(authorDiv);

//       pageDiv.appendChild(pageSpan);
//       pageDiv.appendChild(cardPage);

//       readDiv.appendChild(cardReadT);
//       cardReadT.appendChild(cardReadButton);
//       cardReadT.appendChild(switchButton);

//       newCard.appendChild(pageDiv);
//       newCard.appendChild(readLabel);
//       newCard.appendChild(readDiv);
//       newCard.appendChild(cardDeleteButton);

//       let readIcon = document.createElement("div");
//       let iconImage = document.createElement("img");
//       readIcon.setAttribute("class", "read-icon");
//       iconImage.setAttribute("class", "icon");
//       iconImage.src = "./images/hipster-cat.png";
//       // readIcon.classList.add('hide')
//       readIcon.classList.toggle("hide", book.read);
//       readIcon.appendChild(iconImage);
//       newCard.appendChild(readIcon);

//       container.appendChild(newCard);

//       localStorage.setItem("booksArray", JSON.stringify(myLibrary));
//     }
//   });
// };

// Run the function to add any books in Array to DOM
showBooks(JSON.parse(localStorage.getItem("booksArray")));

// // Event listener for buttons in cards
// container.addEventListener("click", (e) => {
//   // console.log(myLibrary.map(book => book.author))
//   // console.log(e.target.parentNode.parentNode.querySelector('.title').textContent)

//   if (e.path[0].type == "checkbox") {
//     let x = myLibrary
//       .map((book) => book.title)
//       .indexOf(
//         e.target.parentNode.parentNode.parentNode.querySelector(".title")
//           .textContent
//       );
//     let toggler = !e.path[0].checked; // returns true or false depending on check

//     // e.target.parentNode.parentNode.parentNode.classList.toggle('read', toggler)
//     e.path[3].children[6].classList.toggle("hide", toggler);
//     console.log(e.path[3].children[6].classList.toggle("hide", toggler));
//     // better version of if else statement
//     myLibrary[x].read = toggler; // toggles read status inside the Array based on DOM
//     console.log(e);

//     localStorage.setItem("booksArray", JSON.stringify(myLibrary)); // update localStorage
//   } else if (e.target.textContent == "X") {
//     let x = myLibrary
//       .map((book) => book.title)
//       .indexOf(e.target.parentNode.querySelector(".title").textContent); // index of title in Array when clicking Delete

//     let titleVerify = myLibrary[x].title; // title from Object
//     let authorVerify = myLibrary[x].author; // author from Object
//     let pagesVerify = myLibrary[x].pages; // pages from Object

//     let titleCheck = e.target.parentNode
//       .querySelector(".title")
//       .textContent.trim(); // title from DOM
//     let authorCheck = e.target.parentNode
//       .querySelector(".authorDiv")
//       .lastChild.textContent.trim(); // author from DOM
//     let pagesCheck = e.target.parentNode
//       .querySelector(".pageDiv")
//       .firstChild.textContent.trim(); // pages from DOM

//     if (
//       titleVerify == titleCheck &&
//       authorVerify == authorCheck &&
//       pagesVerify == pagesCheck
//     ) {
//       console.log("All match. DOM title, author, and pages to Array.");
//       container.removeChild(e.target.parentNode);
//       myLibrary.splice(x, 1);
//       localStorage.setItem("booksArray", JSON.stringify(myLibrary)); // update localStorage
//     } else if (
//       titleVerify == titleCheck &&
//       pagesVerify == pagesCheck &&
//       authorVerify != authorCheck
//     ) {
//       console.log("Warning: author didn't match but title and pages did.");
//       container.removeChild(e.target.parentNode);
//       myLibrary.splice(x, 1);
//       localStorage.setItem("booksArray", JSON.stringify(myLibrary)); // update localStorage
//     } else if (titleVerify != titleCheck) {
//       console.log("The titles do not match");
//     }
//   }
// });
