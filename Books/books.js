/* Library Array */
let myLibrary = [];


/*Book Constructor */
function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " +  author + ", " +  pages + ", " +  read;
    }
}

/*Add Book to Array */
function addBookToLibrary(title, author, pages, read) {
    var book = new Books(title, author, pages, read);
    myLibrary.push(book);
}


/*Display All Book Titles */
function displayBooks () {
    let titles = [];
    for(i = 0; i < myLibrary.length; i++) {
        titles.push(myLibrary[i].title);
    };
    console.table(titles);
    titles = [];
}





/* Placeholder Books */
addBookToLibrary("Book1", "Author1", 10, "No");
addBookToLibrary("Book2", "Author2", 20, "Yes");
displayBooks();



/*PopUp Form Appear & Disappear */
const addBookClick = document.getElementById("newBook");
const popupContainer = document.getElementById("popUpForm");
const contentOverlay = document.getElementById("mainContent");
const closePopUpContainer = document.getElementById("closePopUp");

addBookClick.addEventListener('click', event => {
    popupContainer.classList.add("showDisplay");
    contentOverlay.classList.add("showDisplayOverlay");
}); 

closePopUpContainer.addEventListener('click', event => {
    popupContainer.classList.remove("showDisplay");
    contentOverlay.classList.remove("showDisplayOverlay");
    bookRead.classList.remove("readStatus");
    bookNotRead.classList.remove("readStatus");
});



/*Pop Up Form Read Status */
const bookRead = document.getElementById("bookRead");
const bookNotRead = document.getElementById("notRead");

bookRead.addEventListener('click', event => {
    bookRead.classList.add("readStatus");
    bookNotRead.classList.remove("readStatus");
});

bookNotRead.addEventListener('click', event => {
    bookNotRead.classList.add("readStatus");
    bookRead.classList.remove("readStatus");
});





