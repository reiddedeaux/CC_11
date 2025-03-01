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