import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  // referencia a vble local definida en el componente html
  @ViewChild('localName') accessInputView: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.accessInputView);
  }

}
