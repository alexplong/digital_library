// editor "fixed" my problem but telling me to add a class and constructor function

// class Book {
//   constructor(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function () {
//       if (read) {
//         return `${title} by ${author}, ${pages} pages read`
//       } else {
//         return `${title} by ${author}, ${pages} pages, not read yet`
//       }
//     }
//   }
// }



// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

// old way

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  if (this.read) {
    return `${this.title} by ${this.author}, ${this.pages} pages read`
  } else {
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
  }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(theHobbit.info());