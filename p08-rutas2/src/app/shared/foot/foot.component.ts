import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  public sAuthor: string;
  public sPlace: string;

  constructor() { }

  ngOnInit() {
    this.sAuthor = 'Xurde';
    this.sPlace = 'Xixón';
  }

}
