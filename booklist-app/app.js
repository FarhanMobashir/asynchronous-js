// // Person

// function Person (firstName,lastName,dob) {
//     this.firstname = firstName;
//     this.lastname = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function() {
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);

//     // }
// }

// Person.prototype.getAge = function() {
   
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);

// }

// Person.prototype.getFullName = function () {
//     return `${this.firstname} ${this.lastname}`;
// }


// const mobashir = new Person('mobashir','farhan',"9/10/2003");

// console.log(mobashir.getFullName());


// Book constructor

function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn =isbn;
}

// showalert

UI.prototype.showAlert = function(message, className) {
    // create element 
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

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 2000);
}


// UI constructor

function UI() {}

UI.prototype.addBookToList = function() {

}



// clear field

UI.prototype.clearfields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// deletebook

UI.prototype.deleteBook = function(target) {
   if(target.className === 'delete') {
       target.parentElement.parentElement.remove();
   } 
}

// Event listeners for add book
// Get form value
document.getElementById("book-form").addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const  isbn = document.getElementById('isbn').value;
    
    // instantiating the book
    const book = new Book(title,author,isbn);

    // instantiating th UI
    const ui = new UI();
    
    // add book to list
    ui.addBookToList(book);

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

    if(title === ''|| author === '' || isbn === ''){
        // error alert

        ui.showAlert('Please fill in all fields', 'error');
    } else {
        list.appendChild(row);

        ui.showAlert("Book added successfully", 'success');

    ui.clearfields();
    }

    
    
    e.preventDefault();
});


// Event listener for delete

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);

    // show alert
    ui.showAlert('Book removed', 'error');
    e.preventDefault();

});