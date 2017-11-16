import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookGoogleService } from '../../services/book-google.service';

@Component({
  selector: 'app-search-http-service',
  templateUrl: './search-http-service.component.html',
  styleUrls: ['./search-http-service.component.css']
})
export class SearchHttpServiceComponent implements OnInit {

  public aBooks: Array<string>;
  public keyBook: string;


  constructor(public books: BookGoogleService) { }

  ngOnInit() {
    this.aBooks = [];
  }

  btnSearch() {

    this.aBooks = [];
    this.books.search(this.keyBook)
      .then(
        (response) => {
          this.aBooks = response;
        }
      );
  }

  btnSearchRx() {

    this.aBooks = [];
    this.books.searchRx(this.keyBook)
      .subscribe(
        (response) => {
          this.aBooks = response;
        }
      );
  }
}
