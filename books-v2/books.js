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



addBookToLibrary("The Hobbit", "Tolkien", 452, "No")
addBookToLibrary("The Hobbit", "Tolkien", 456, "No")
addBookToLibrary("The Hobbit", "Tolkien", 654, "No")
addBookToLibrary("The Hobbit", "Tolkien", 7852, "No")


bookLibrary.forEach(element => {
    // Create Book Card
    const card = document.createElement('div');
    card.className = 'bookCard'

    // Create Book Title
    const cardTitle = document.createElement('p')
    cardTitle.innerText = element.title;

    // Create Book Author
    const cardAuthor = document.createElement('p')
    cardAuthor.innerText = element.author;

    // Create Book PAges
    const cardPages = document.createElement('p')
    cardPages.innerText = element.pages;

    // Create Book Status
    const cardStatus = document.createElement('p')
    cardStatus.innerText = element.status;

    // Create Delete Button
    const cardDelete = document.createElement('button');

    // Attach info to Card
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardStatus)
    card.appendChild(cardDelete)

    // Attach Card to DOM
    document.querySelector('#books').appendChild(card)
})