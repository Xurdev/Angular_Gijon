import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-colores',
  templateUrl: './lista-colores.component.html',
  styleUrls: ['./lista-colores.component.css']
})
export class ListaColoresComponent implements OnInit {

  public nTotal: number;
  public oColores: any;

  constructor() { }

  ngOnInit() {
    this.nTotal = 0;
    this.oColores = {positivo: this.nTotal >= 0,
                      negativo: this.nTotal < 0};
  }

  btnSumar () {
    this.nTotal++;
    this.oColores = {positivo: this.nTotal >= 0,
      negativo: this.nTotal < 0};
  }

  btnRestar () {
    this.nTotal--;
    this.oColores = {positivo: this.nTotal >= 0,
      negativo: this.nTotal < 0};
  }

}
