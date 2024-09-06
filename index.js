import Book from './classes/Book.js';
import Member from './classes/Member.js';
import Library from './classes/Library.js';

const library = new Library();

const book1 = new Book('The Hobbit', 'J.R.R', '12345');
const book2 = new Book("Bleach", "Tite Kubo", "1010");
const book3 = new Book("Attack on Titan", "Ishikawa", "20202");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new Member('Alice', 1);

library.lendBook('The Hobbit', 1);
library.lendBook('Bleach', 1);

library.returnBook('The Hobbit', 1);
library.returnBook('Attack on Titan', 1);