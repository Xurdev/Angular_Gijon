import { Component, OnInit } from '@angular/core';
import { BookMockService } from '../../services/book-mock.service';

@Component({
  selector: 'app-search-books-async',
  templateUrl: './search-books-async.component.html',
  styleUrls: ['./search-books-async.component.css']
})
export class SearchBooksAsyncComponent implements OnInit {

  public aBooks: any;
  // Array<string>;
  public keyBook: string;

  constructor(public bookMockService: BookMockService) { }

  ngOnInit() {
    this.aBooks = [];
  }

  btnSearch() {
    this.aBooks =
      this.bookMockService.searchBooksAsnc(this.keyBook)
        .then(JSON.parse)
        .then(
          // Función OK
            (response) => {
              console.log(response);
              this.aBooks = response;
            }
          ,
          // Función ERROR
            (error) => { console.log(error); }
        );
    console.log(this.aBooks);
  }

}
