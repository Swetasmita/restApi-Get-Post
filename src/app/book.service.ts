import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    url = "api/books";
    constructor(private http: HttpClient) { }

//HttpClient GET request to read data
    getBooksObservable(): Observable<Book[]> {
        return this.http.get(this.url).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        );
    }
    //HttpClient POST request to insert data
    addBooksObservable(book: Book): Observable<Book> {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        return this.http.post(this.url, book, { headers: httpHeaders }).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        );
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    //Error Handling Messages
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
        return throwError(error);
    }
 
} 