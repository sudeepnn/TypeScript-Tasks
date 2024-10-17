"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authors = [];
var books = [];
var members = [];
function addAuthor(id, name, biography) {
    var author = { id: id, name: name, biography: biography };
    authors.push(author);
}
function addBook(id, title, authorId, publishedYear, genre, availableCopies) {
    var book = { id: id, title: title, authorId: authorId, publishedYear: publishedYear, genre: genre, availableCopies: availableCopies };
    books.push(book);
}
function addMember(id, name, membershipDate) {
    var member = { id: id, name: name, membershipDate: membershipDate, borrowedBooks: [] };
    members.push(member);
}
function displayBooks() {
    console.log("Books in the Library:");
    books.forEach(function (book) {
        var _a;
        var author = ((_a = authors.find(function (auth) { return auth.id === book.authorId; })) === null || _a === void 0 ? void 0 : _a.name) || "Unknown";
        console.log("ID: ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(author, ", Year: ").concat(book.publishedYear, ", Genre: ").concat(book.genre, ", Available Copies: ").concat(book.availableCopies));
    });
}
function searchBooksByGenre(genre) {
    return books.filter(function (book) { return book.genre.toLowerCase() === genre.toLowerCase(); });
}
function borrowBook(memberId, bookId) {
    var member = members.find(function (mem) { return mem.id === memberId; });
    var book = books.find(function (bk) { return bk.id === bookId; });
    if (member && book && book.availableCopies > 0) {
        member.borrowedBooks.push(bookId);
        book.availableCopies -= 1;
        console.log("Book borrowed successfully: ".concat(book.title, " by ").concat(member.name));
    }
    else {
        console.log("Borrowing failed. Book may not be available or Member not found.");
    }
}
function returnBook(memberId, bookId) {
    var member = members.find(function (mem) { return mem.id === memberId; });
    var book = books.find(function (bk) { return bk.id === bookId; });
    if (member && book && member.borrowedBooks.includes(bookId)) {
        member.borrowedBooks = member.borrowedBooks.filter(function (id) { return id !== bookId; });
        book.availableCopies += 1;
        console.log("Book returned successfully: ".concat(book.title, " by ").concat(member.name));
    }
    else {
        console.log("Return failed. Book may not have been borrowed by the member.");
    }
}
addAuthor(1, "J.K. Rowling", "Author of the Harry Potter series");
addAuthor(2, "George R.R. Martin", "Author of A Song of Ice and Fire");
addBook(1, "Harry Potter and the Philosopher's Stone", 1, 1997, "Fantasy", 5);
addBook(2, "A Game of Thrones", 2, 1996, "Fantasy", 3);
addMember(1, "Alice Johnson", new Date("2022-05-12"));
addMember(2, "Bob Smith", new Date("2023-03-18"));
displayBooks();
borrowBook(1, 1);
borrowBook(2, 2);
returnBook(1, 1);
console.log("Books in Fantasy genre:", searchBooksByGenre("Fantasy"));
