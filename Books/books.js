
/*--------- Book Array ----------*/

/* Library Array */
let myLibrary = [];


/*Book Constructor */
function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return title + " by " +  author + ", " +  pages + ", " +  read;
    // }
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
    console.log()
}

/*---------- End Book Array ----------*/







/*---------- Local Storage ----------*/

function addToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function retrieveLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}

function clearLocalStorage() {
    localStorage.clear()
}

function updateLocalStorage() {
    clearLocalStorage();
    addToLocalStorage();
}

/*---------- End Local Storage----------*/









/*--------- Pop up Form ----------*/

/*PopUp Form Appear & Disappear */
const addBookClick = document.getElementById("newBookButton");
const popupContainer = document.getElementById("popUpForm");
const contentOverlay = document.getElementById("popUpOverlayColour");
const closePopUpContainer = document.getElementById("closePopUp");

function openPopUp() {
    popupContainer.classList.add("showDisplay");
    contentOverlay.classList.add("showDisplayOverlay");
}; 

addBookClick.addEventListener('click', openPopUp);

function closePopUp() {
    popupContainer.classList.remove("showDisplay");
    contentOverlay.classList.remove("showDisplayOverlay");
    form.reset();
};

closePopUpContainer.addEventListener('click', closePopUp);

/*--------- End Pop up Form ----------*/







/*--------- Submit Form Data ----------*/


/* Book Read or Not */
const readCheckBox = document.getElementById('togBtn');
let readOrNot = "";

function bookReadOrNot() {
    if(readCheckBox.checked) {
        readOrNot = "readYes";
        return "readYes";
    } else {
        readOrNot = "readNo";
        return "readNo";
    }
};

/* Form Data to Array on click 'Submit'*/
const clickSubmit = document.getElementById('submitBook');
const form = document.getElementById('formData');
    

clickSubmit.addEventListener('click', event => {
    const formTitle = document.getElementById('titleInput').value;
    const formAuthor = document.getElementById('authorInput').value;
    const formPages = document.getElementById('pageNumber').value;
    bookReadOrNot();
    addBookToLibrary(formTitle, formAuthor, formPages, readOrNot);
    let newEntry = myLibrary.length - 1;
    addBookCard(newEntry)
    updateLocalStorage()
    closePopUp();  
});

/*--------- End Submit Form Data ----------*/







/*--------- Add Book Cards ----------*/

const booksBar = document.getElementById('bookRowContent');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function addBookCard(bookNumber) {

    const newBookCard = document.createElement('div');
    newBookCard.classList.add('bookCard');
    newBookCard.setAttribute('id', `bookCard${bookNumber}`);
    document.getElementById('bookRowContent').appendChild(newBookCard);
 
    const htmlBook = `
        <h3 class="bookTitle">${capitalizeFirstLetter(myLibrary[bookNumber].title)}</h3>
        <p class="bookAuthor">${capitalizeFirstLetter(myLibrary[bookNumber].author)}</p>
        <p class="bookPages">${myLibrary[bookNumber].pages} Pages</p>
        <button id="read${bookNumber}" class="read-btn ${myLibrary[bookNumber].read}"></button>
        <p><button id="delete${bookNumber}" class="delete-btn"></button></p>
        `;

    document.getElementById(`bookCard${bookNumber}`).insertAdjacentHTML("afterbegin", htmlBook);
}

/*--------- End Add Book Cards ----------*/




/*---------- Change Read Status or Delete Book ----------*/

booksBar.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    let readNumber = event.target.id.charAt(4);
    if (!isButton) {
      return;
    } 
    if(event.target.classList.contains('readNo')) {
        event.target.classList.remove('readNo');
        event.target.classList.add('readYes');
        myLibrary[readNumber].read = "readYes";
        updateLocalStorage()
        return;
    } 
    if(event.target.classList.contains('readYes')) {
        event.target.classList.remove('readYes');
        event.target.classList.add('readNo');
        myLibrary[readNumber].read = "readNo";
        updateLocalStorage()
        return;
    }
    /* Delete Book Card */
    if(event.target.classList.contains('delete-btn')) {
        let deleteNumber = event.target.id.charAt(6);
        myLibrary.splice(deleteNumber, 1);
        rePopulateBooks();
        updateLocalStorage()
    }
  })

/*---------- End Change Read Status  ----------*/





/*---------- Repopulate Book Cards After Delete ----------*/

function rePopulateBooks() {

    for(i = 0; i <= myLibrary.length; i++) {
        let victimCard = document.getElementById('bookCard' + i);
        if(victimCard === null) {
            continue
        }
        victimCard.remove();
    }
    for(i = 0; i < myLibrary.length; i++) {
        addBookCard(i)
    }
}

/*---------- End Repopulate Book Cards After Delete ----------*/









/*---------- Load Local Storage ----------*/

function loadLocalStorage() {
    retrieveLocalStorage();
    rePopulateBooks();
}

loadLocalStorage();

/*---------- End Load Local Storage ----------*/




