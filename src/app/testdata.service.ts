import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})


export class TestdataService implements InMemoryDbService{
//Create a class implementing InMemoryDbService interface.

  constructor() { }

  createDb(){
//we are creating an in-memory DB for books.
    let books = [
      { id: 1, name: 'Core Java' },
      { id: 2, name: 'Angular' },
      { id: 3, name: 'React' }
    ];
      
      return{books}; 
         //To interact with DB, URL will be api/books.

  }
}
