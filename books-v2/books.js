// List of Books
let bookLibrary = [];

// Book Constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// Add a book
function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status)
    bookLibrary.push(book)
}

// Test Values
// Test Values
// Test Values
// Test Values

addBookToLibrary("The Hobbit", "Tolkien", 452, "No")
addBookToLibrary("The Hobbit", "Tolkien", 456, "No")
addBookToLibrary("The Hobbit", "Tolkien", 654, "No")
addBookToLibrary("The Hobbit", "Tolkien", 7852, "No")

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

    // Create Book PAges
    const cardPages = document.createElement('p')
    cardPages.innerText = bookLibrary[cardNumber].pages;

    // Create Book Status
    const cardStatus = document.createElement('p')
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
        const status = document.querySelector('#status').value;

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

// Delete Book from Library
function deleteBook() {
    const deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach(element => {
        element.addEventListener('click', function(event) {
            const card = this.closest('.bookCard').getAttribute('data-value')
            console.log(card)
            bookLibrary.splice(card, 1)
            clearBooksContainer()
            populateAllBooks()
        })
    })
}


// Run on Load

populateAllBooks()
addToLibrary()