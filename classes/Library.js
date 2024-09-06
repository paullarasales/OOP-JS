class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
    }

    addMember(member) {
        this.members.push(member);
        console.log(`Added member "${member.name}" to the library.`);
    }
    
    lendBook(bookTitle, memberId) {
        const book = this.books.find(b => b.title === bookTitle);
        const member = this.members.find(m => m.memberId === memberId);
        
        if (book && member) {
            member.borrowBook(book);
        } else {
            console.log(`Book or member not found.`);
        }
    }

    returnBook(bookTitle, memberId) {
        const book = this.books.find(b => b.title === bookTitle);
        const member = this.members.find(m => m.memberId === memberId);
        
        if (book && member) {
            member.returnBook(book);
        } else {
            console.log('Book or member not found.');
        }
    }
}

export default Library;