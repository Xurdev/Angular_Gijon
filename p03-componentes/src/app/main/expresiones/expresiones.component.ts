import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExpresionesComponent implements OnInit {

  public sName: string;
  public nValue: number;

  constructor() { }

  ngOnInit() {
    this.sName = 'Xurde';
    this.nValue = 89;
  }

}
