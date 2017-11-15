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

}
