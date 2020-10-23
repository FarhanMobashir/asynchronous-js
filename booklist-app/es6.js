class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {

        const list = document.getElementById('book-list');

        // create table row

        const row = document.createElement('tr');

        // inser cols

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delete">X</a></td>`;
        list.appendChild(row);

    }

    showAlert(message, className) {
        const div = document.createElement('div');

        // adding a classname

        div.className = `alert ${className}`;

        // adding text

        div.appendChild(document.createTextNode(message));

        // get parent

        const container = document.querySelector('.container');
        // form
        const form = document.querySelector('#book-form');
        //insert before
        container.insertBefore(div, form);

        // set timeout

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);

    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local Storage

class Store {
    static getBooks() {

        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;

    }
    static displayBooks() {

    }
    static addBook() {

    }
    static removeBook() {

    }
}

// Event Listener

document.getElementById("book-form").addEventListener('submit', function (e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiating the book
    const book = new Book(title, author, isbn);

    // instantiating th UI
    const ui = new UI();


    const list = document.getElementById('book-list');

    // create table row

    const row = document.createElement('tr');

    // inser cols

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X</a></td>`

    // validattion

    if (title === '' || author === '' || isbn === '') {
        // error alert

        ui.showAlert('Please fill in all fields', 'error');
    } else {
        list.appendChild(row);

        ui.showAlert("Book added successfully", 'success');

        ui.clearFields();
    }



    e.preventDefault();
});


// Event listener for delete

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);

    // show alert
    ui.showAlert('Book removed', 'error');
    e.preventDefault();

});