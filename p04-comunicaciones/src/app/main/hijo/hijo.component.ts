import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input () hijoNombre: string;
  @Output () emitNo: EventEmitter<string>;
  sNombreElegido: string;

  constructor() {
    // por tratarse de una suscripción hacemos la inicialización aquí
    this.emitNo = new EventEmitter();
   }

  ngOnInit() {
  }

  btnNoMeGusta () {
    this.emitNo.emit(this.sNombreElegido);
  }

}
