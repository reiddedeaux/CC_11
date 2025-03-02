// Task 1 Created Book Class
class Book {
    constructor(title, author, isbn, copies){
        this.title = title ;
        this.author = author ;
        this.isbn = isbn ;
        this.copies = copies ;
    };// Details of the book
    getDetails (){
        return `Title : ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}` // Returns the detials of the book
    };
    updateCopies(quantity){
        this.copies += quantity ;
    }
};
const book1 = new Book("The Great Gatsby", "F.Scott Fitzgerald", 12345, 5); 
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: F.Scott Fitzgerald, ISBN: 12345, Copies: 5
book1.updateCopies(-1);
console.log(book1.getDetails());//Title: The Great Gatsby, Author: F.Scott Fitzgerald, ISBN: 12345, Copies: 4
// Task 2 Created Borrower Class
class Borrower {
    constructor(name, borrowerId){
        this.name = name ;
        this.borrowerId = borrowerId ;
        this.borrowedBooks = []; // Array
    };
    borrowBook(book){
        this.borrowedBooks.push(book); // adds books to the array
    };
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    };
};
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); //[The Great Gatsby]


borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // []
// Task 3 Created Library Class
class Library {
    constructor(){
        this.books = [];// array
        this. borrowers = [];//array
    }
    addBook(book){
        this.books.push(book); // adds books to the array
    }
    listBooks(){
        this.books.map(book => console.log(book.getDetails())); //list book details
    }
    addBorrower(borrower){
        this.borrowers.push(borrower); // adds borrowers to array
    }
    //Task 4 Implemented Book Borrowing
    lendBook(borrowerId, isbn){
        const book = this.books.find(book => book.isbn === isbn); // finds the book using isbn
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        if (book && borrower){
            if(book.copies > 0){
                book.updateCopies(-1); // updates the copies
                borrower.borrowBook(book); // borrows the selected book
            }
            else {
                console.log("No Copies Available");
            }
        } else {
            console.log("Book or Borrower Not Found")
        }
    }
    //Task 5 Implemented Book Returns
    returnBook(borrowerId, isbn){
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // finds borrower by id
        const book = this.books.find(b => b.isbn === isbn); // finds book using isbn
        if (book){
            book.updateCopies(1); // updates the copies
            if(borrower){
                borrower.returnBook(book); // returns book
            }
        }
    }
}// Class for library
const library = new Library();
library.addBook(book1); // add book to the library
library.listBooks(); // Title: The Great Gatsby, Author: F.Scott Fitzgerald, ISBN: 123456, Copies: 3

library.lendBook(201, 123456);//borrows the book
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); //[The Great Gatsby]

library.returnBook(201, 123456); //returns the book
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); //[]