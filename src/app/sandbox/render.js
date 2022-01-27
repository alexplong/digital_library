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
      let delBtn = document.createElement("button");

      let Switch = document.createElement("label");
      let toggleInput = document.createElement("input");
      let toggleSwitch = document.createElement("span");

      authorContainer.setAttribute(
        "class",
        "flex flex-dir-r flex-ai-c flex-jc-c"
      );
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

      delBtn.setAttribute("class", "delete");
      card.setAttribute("data-title", `${element.title}`);

      Switch.setAttribute("class", "Switch");
      toggleInput.setAttribute("type", "checkbox");
      toggleInput.setAttribute("class", "Switch_Input");
      toggleSwitch.setAttribute("class", "Slider");

      Switch.append(toggleInput, toggleSwitch);
      toggleInput.checked = element.read;

      authorContainer.append(authorName);
      pagesContainer.append(pagesNumber);

      card.append(title, authorContainer, pagesContainer, Switch, delBtn);
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
    let delBtn = document.createElement("button");

    let Switch = document.createElement("label");
    let toggleInput = document.createElement("input");
    let toggleSwitch = document.createElement("span");

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

    delBtn.setAttribute("class", "delete");
    card.setAttribute("data-title", `${book.title}`);
    Switch.setAttribute("class", "Switch");
    toggleInput.setAttribute("type", "checkbox");
    toggleInput.setAttribute("class", "Switch_Input");
    toggleSwitch.setAttribute("class", "Slider");

    Switch.append(toggleInput, toggleSwitch);
    toggleInput.checked = book.read;

    authorContainer.append(authorName);
    pagesContainer.append(pagesNumber);

    card.append(title, authorContainer, pagesContainer, Switch, delBtn);
    container.append(card);
  };

  const deleteBook = (book) => {
    let byeBook = document.querySelector(`[data-title='${book}']`);
    container.removeChild(byeBook);
  };

  return {
    showLibrary,
    showBook,
    deleteBook,
  };
};

export default renderPage;
