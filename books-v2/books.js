// List of Books
let bookLibrary = [];

// Book Constructor
// function Book(title, author, pages, status) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
//     this.changeStatus = function readOrNot() {
//         if (this.status == 'yes') {
//             this.status = 'no'
//         } else if (this.status == 'no') {
//             this.status = 'yes'
//         }

//     }
// }

class BookClass {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    changeStatus = function readOrNot() {
        if (this.status == 'yes') {
            this.status = 'no'
        } else if (this.status == 'no') {
            this.status = 'yes'
        }

    }
}

// Add a book
function addBookToLibrary(title, author, pages, status) {
    const book = new BookClass(title, author, pages, status)
    bookLibrary.push(book)
}

// Test Values
// Test Values
// Test Values
// Test Values

addBookToLibrary("The Hobbit", "Tolkien", 452, "no")
addBookToLibrary("The Hobbit", "Tolkien", 456, "no")
addBookToLibrary("The Hobbit", "Tolkien", 654, "yes")
addBookToLibrary("The Hobbit", "Tolkien", 7852, "no")

// Test Values
// Test Values
// Test Values
// Test Values


// Populate Book Cards
function addBookCards(cardNumber) {

    // Create Book Card
    const card = document.createElement('div');
    card.className = 'bookCard'
    card.setAttribute("data-value", cardNumber);

    // Create Book Title
    const cardTitle = document.createElement('p')
    cardTitle.innerText = bookLibrary[cardNumber].title;

    // Create Book Author
    const cardAuthor = document.createElement('p')
    cardAuthor.innerText = bookLibrary[cardNumber].author;

    // Create Book Pages
    const cardPages = document.createElement('p')
    cardPages.innerText = bookLibrary[cardNumber].pages;

    // Create Book Status
    const cardStatus = document.createElement('button')
    cardStatus.className = 'readBtn';
    cardStatus.innerText = bookLibrary[cardNumber].status;

    // Create Delete Button
    const cardDelete = document.createElement('button');
    cardDelete.className = 'deleteBtn';
    cardDelete.innerHTML = 'Delete';

    // Attach info to Card
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardStatus)
    card.appendChild(cardDelete)

    // Attach Card to DOM
    document.querySelector('#bookCards').appendChild(card)
}

// Add All Books to Page
function populateAllBooks() {
    bookLibrary.forEach((element, index) => {
        addBookCards(index)
    })
    changeReadStatus()
    deleteBook()
}

// Clear Books Container
function clearBooksContainer() {
    const bookCardContainer = document.querySelector('#bookCards');
    bookCardContainer.innerHTML = '';
}

// Clear Form Values
function clearFormValues() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#status').value = '';
}

// Add Form Values to bookLibrary
function addToLibrary() {
    const submit = document.querySelector('#addBook')
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const status = document.querySelector('#status').value.toLowerCase();

        if (title === '' || author === '' || pages === '' || status === '') {
            alert('Please fill out all fields')
            return
        }
        if (isNaN(pages) == true) {
            alert('Please enter a Number for Pages')
            return
        }
        addBookToLibrary(title, author, pages, status);
        addBookCards(bookLibrary.length - 1)
        clearFormValues()
    })
}

// Change Read Status
function changeReadStatus() {
    const readButton = document.querySelectorAll('.readBtn');
    readButton.forEach(element => {
        element.addEventListener('click', function(event) {
            const card = this.closest('.bookCard').getAttribute('data-value')
            bookLibrary[card].changeStatus()
            clearBooksContainer()
            populateAllBooks()
        })
    })
}

// Delete Book from Library
function deleteBook() {
    const deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach(element => {
        element.addEventListener('click', function(event) {
            const card = this.closest('.bookCard').getAttribute('data-value')
            bookLibrary.splice(card, 1)
            clearBooksContainer()
            populateAllBooks()
        })
    })
}


// Run on Load

populateAllBooks()
addToLibrary()