import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "https://localhost:7160/api/Books";

  constructor(private http:HttpClient) { }

  getBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.apiUrl);
  }

  getBookById(id:number):Observable<BookModel>{
    return this.http.get<BookModel>(this.apiUrl+"/"+id);
  }

  addBook(book:BookModel) : Observable<BookModel>
  {
    return this.http.post<BookModel>(this.apiUrl,book);
  }

  updateBook(book:BookModel) : Observable<BookModel>
  {
    return this.http.put<BookModel>(this.apiUrl+'/'+book.bookID,book);
  }

  deleteBook(id?:number) : Observable<void>
  {
    return this.http.delete<void>(this.apiUrl+'/'+id);
  }

}
