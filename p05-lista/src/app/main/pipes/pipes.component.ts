import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PipesComponent implements OnInit {

  public sNombre: string;
  public nValor: number;
  public nPrecio: number;
  public dFecha: Date;
  public nPerc: number;
  public oDato: Object;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nValor = 30.876;
    this.nPrecio = 4.50;
    this.dFecha = new Date();
    this.nPerc = 0.87;
    this.oDato = {nombre: 'Jorge',
                      apellido: 'Vegas'};
  }

}
