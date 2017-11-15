import { Component, OnInit } from '@angular/core';
import { BookMockService } from '../../services/book-mock.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  public aBooks: Array<string>;
  public keyBook: string;

  constructor(public bookMockService: BookMockService) { }

  ngOnInit() {
    this.aBooks = [];
  }

  btnSearch() {
    this.aBooks =
      this.bookMockService.getBook(this.keyBook);
  }

}
