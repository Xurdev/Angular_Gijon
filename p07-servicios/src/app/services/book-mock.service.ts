import { Injectable } from '@angular/core';


@Injectable()
export class BookMockService {

  aBooks: Array<string>;

  constructor() {
    this.aBooks = [
      'Angular básico',
      'Angular en 10 minutos',
      'Angular avanzado'
    ];
  }

  getBook(key: string) {
    return this.aBooks;
  }

  searchBooksAsnc(key: string) {
    return new Promise(
      // function (resolve, reject) {}
      (resolve, reject) => {
        setTimeout (
          () => {resolve(JSON.stringify(this.aBooks)); }
          , 1000
        );
      }
    );
  }

}
