import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search-books-google',
  templateUrl: './search-books-google.component.html',
  styleUrls: ['./search-books-google.component.css']
})
export class SearchBooksGoogleComponent implements OnInit {

  public aBooks: Array<string>;
  public keyBook: string;
  public sUrl: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.aBooks = [];
    this.sUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnSearch() {

    this.aBooks = [];

    const url = this.sUrl + this.keyBook;

    this.http.get(url).toPromise()
    .then(
      (response) => {
        console.log(response.json().items.forEach(
          element => {
            this.aBooks.push(element.volumeInfo.title);
          }
        ));
      }
    );
  }

  btnSearchResponsive() {
    this.aBooks = [];

    const url = this.sUrl + this.keyBook;

    this.http.get(url).subscribe(
      (response) => {
        console.log(response.json().items.forEach(
          element => {
            this.aBooks.push(element.volumeInfo.title);
          }
        ));
      }
    );
  }


}
