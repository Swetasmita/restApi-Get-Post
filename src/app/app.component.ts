import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restapi-HttpClientPost';
  books: Book[] = [];
  errorMessage = '';
  bookName = '';
  //Declare params id, name
  book = { id: 0, name: '' };
 
  constructor(private bookService : BookService){}

    ngOnInit(){
         this.fetchBooks();
  
     }
     //Subscribe to our Observable to Get access
     fetchBooks(){
      this.bookService.getBooksObservable().subscribe(books => this.books = books, 
        error => this.errorMessage= error)
     }
     addBook(){
       this.bookService.addBooksObservable(this.book)
       .subscribe(book => {
         this.fetchBooks();
        this.reset();
        this.bookName= book.name;
       },
     error => this.errorMessage = error);
}
//Resetting your values
private reset() {
this.book.id = 0;
this.book.name = '';
this.errorMessage = '';
this.bookName = '';
}
} 

