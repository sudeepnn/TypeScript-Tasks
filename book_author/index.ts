import { Author } from "./Author";
import { Book } from "./Book";  
 import { Member } from "./member";
  
 
  
  const authors: Author[] = [];
  const books: Book[] = [];
  const members: Member[] = [];
  

  function addAuthor(id: number, name: string, biography?: string): void {
    const author: Author = { id, name, biography };
    authors.push(author);
  }
  
  function addBook(id: number, title: string, authorId: number, publishedYear: number, genre: string, availableCopies: number): void {
    const book: Book = { id, title, authorId, publishedYear, genre, availableCopies };
    books.push(book);
  }
  
  function addMember(id: number, name: string, membershipDate: Date): void {
    const member: Member = { id, name, membershipDate, borrowedBooks: [] };
    members.push(member);
  }
  
  function displayBooks(): void {
    console.log("Books in the Library:");
    books.forEach(book => {
      const author = authors.find(auth => auth.id === book.authorId)?.name || "Unknown"
      console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${author}, Year: ${book.publishedYear}, Genre: ${book.genre}, Available Copies: ${book.availableCopies}`);
    });
  }
  
  function searchBooksByGenre(genre: string): Book[] {
    return books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
  }
  
  function borrowBook(memberId: number, bookId: number): void {
    const member = members.find(mem => mem.id === memberId)
    const book = books.find(bk => bk.id === bookId);
  
    if (member && book && book.availableCopies > 0) {
      member.borrowedBooks.push(bookId)
      book.availableCopies -= 1;
      console.log(`Book borrowed successfully: ${book.title} by ${member.name}`);
    } else {
      console.log("Borrowing failed. Book may not be available or Member not found.")
    }
  }
  
  function returnBook(memberId: number, bookId: number): void {
    const member = members.find(mem => mem.id === memberId)
    const book = books.find(bk => bk.id === bookId);
  
    if (member && book && member.borrowedBooks.includes(bookId)) {
      member.borrowedBooks = member.borrowedBooks.filter(id => id !== bookId)
      book.availableCopies += 1;
      console.log(`Book returned successfully: ${book.title} by ${member.name}`);
    } else {
      console.log("Return failed. Book may not have been borrowed by the member.")
    }
  }
  
  addAuthor(1, "J.K. Rowling", "Author of the Harry Potter series")
  addAuthor(2, "George R.R. Martin", "Author of A Song of Ice and Fire")
  
  addBook(1, "Harry Potter and the Philosopher's Stone", 1, 1997, "Fantasy", 5)
  addBook(2, "A Game of Thrones", 2, 1996, "Fantasy", 3)
  
  addMember(1, "Alice Johnson", new Date("2022-05-12"))
  addMember(2, "Bob Smith", new Date("2023-03-18"));
  
  displayBooks()
  
  borrowBook(1, 1); 
  borrowBook(2, 2)
  
  returnBook(1, 1);
  
  console.log("Books in Fantasy genre:", searchBooksByGenre("Fantasy"))
  