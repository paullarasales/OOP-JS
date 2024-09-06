class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    }

    lend() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been lent out`);
        } else {
            console.log(`${this.title} is not available`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned`);
    }
}

export default Book;