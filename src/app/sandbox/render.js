const renderPage = () => {
  // cache container
  const container = document.querySelector(".container");

  const showLibrary = (library) => {
    // cache container and create
    library.forEach((element) => {
      let card = document.createElement("div");
      let title = document.createElement("h4");
      let authorContainer = document.createElement("div");
      let authorName = document.createElement("span");
      let pagesContainer = document.createElement("div");
      let pagesNumber = document.createElement("span");
      let readContainer = document.createElement("div");
      let readSwitch = document.createElement("input");
      let delBtn = document.createElement("button");

      authorContainer.setAttribute("class", "flex flex-dir-r flex-ai-c");
      pagesContainer.setAttribute(
        "class",
        "flex flex-dir-r flex-ai-c flex-jc-c"
      );

      card.setAttribute("class", "card");
      title.textContent = `${element.title}`;
      authorName.textContent = `By ${element.author}`;
      pagesNumber.textContent = `${element.pages} pages`;
      delBtn.textContent = "X";

      title.setAttribute("class", "title");
      authorName.setAttribute("class", "author");
      pagesNumber.setAttribute("class", "page");

      readSwitch.setAttribute("class", "read-button");
      readSwitch.setAttribute("type", "checkbox");

      delBtn.setAttribute("class", "delete");
      card.setAttribute("data-title", `${element.title}`);

      authorContainer.append(authorName);
      pagesContainer.append(pagesNumber);
      readContainer.append(readSwitch);

      card.append(
        title,
        authorContainer,
        pagesContainer,
        readContainer,
        delBtn
      );
      container.append(card);
    });
  };

  const showBook = (book) => {
    // cache container and append
    let card = document.createElement("div");
    let title = document.createElement("h4");
    let authorContainer = document.createElement("div");
    let authorName = document.createElement("span");
    let pagesContainer = document.createElement("div");
    let pagesNumber = document.createElement("span");
    let readContainer = document.createElement("div");
    let readSwitch = document.createElement("input");
    let delBtn = document.createElement("button");

    authorContainer.setAttribute(
      "class",
      "flex flex-dir-r flex-ai-c flex-jc-c"
    );
    pagesContainer.setAttribute("class", "flex flex-dir-r flex-ai-c flex-jc-c");

    card.setAttribute("class", "card");
    title.textContent = `${book.title}`;
    authorName.textContent = `By ${book.author}`;
    pagesNumber.textContent = `${book.pages} pages`;
    delBtn.textContent = "X";

    title.setAttribute("class", "title");
    authorName.setAttribute("class", "author");
    pagesNumber.setAttribute("class", "page");
    readSwitch.setAttribute("class", "read-button");
    readSwitch.setAttribute("type", "checkbox");
    delBtn.setAttribute("class", "delete");
    card.setAttribute("data-title", `${book.title}`);

    authorContainer.append(authorName);
    pagesContainer.append(pagesNumber);
    readContainer.append(readSwitch);

    card.append(title, authorContainer, pagesContainer, readContainer, delBtn);
    container.append(card);
  };

  const deleteBook = (book) => {
    let byeBook = document.querySelector(`[data-title='${book}']`);
    container.removeChild(byeBook);
  };

  const readBook = (book) => {
    let x = document.querySelector();
  };

  return {
    showLibrary,
    showBook,
    deleteBook,
    readBook,
  };

  // move to main
  // localStorage.setItem("booksArray", JSON.stringify(myLibrary));
};

export default renderPage;
