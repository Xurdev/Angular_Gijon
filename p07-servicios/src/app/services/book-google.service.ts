import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookGoogleService {

  public sUrl: string;

  constructor(public http: Http) {
    this.sUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  search (key: string) {
    const aBooks: Array<string> = [];

    const url = this.sUrl + key;

    return this.http.get(url).toPromise()
    .then(
      (response) => {
        response.json().items.forEach(
          element => {
            aBooks.push(element.volumeInfo.title);
          }
        );

        return aBooks;
      }
    );
  }

  searchRx (key: string) {
    const url = this.sUrl + key;
    return this.http.get(url).map(
        response => this.extractTitles(response),
        error => console.log(error)
        );
    }

    private extractTitles(response: Response) {
      if (response.json().items) {
        return response.json().items.map(
          book => book.volumeInfo.title);
        } else {
          return response;
        }
  }

}
