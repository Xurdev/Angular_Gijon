import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sTitulo: string;
  constructor() {
    // se deja para la injeción de dependencias, para inicialización de vbles 
    // se usa ngOnInit
  }

  ngOnInit() {
    this.sTitulo = 'Directivas';
  }

}
