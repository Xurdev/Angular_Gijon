import { Component, OnInit, ViewChild } from '@angular/core';
import { Printing, Printer, Department } from '../../models/models';

@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css']
})
export class FormVistaComponent implements OnInit {

  @ViewChild('form1') formVista: any;

  public printingOrder: Printing;

  public aPrinters: Array<Printer>;
  public aDepartments: Array<Department>;

  constructor() { }

  ngOnInit() {
    this.printingOrder = new Printing(
      {name: '', surname: '', phoneNumber: ''},
      {code: '', description: ''},
      false,
      false,
      {code: '', description: ''}
    );

    this.aPrinters = [
      {code: '001', description: 'HP'},
      {code: '002', description: 'Lexmark'},
      {code: '003', description: 'Brother'}
    ];

    this.aDepartments = [
      {code: 'RH', description: 'RRHH'},
      {code: 'FZ', description: 'Finanzas'},
      {code: 'DR', description: 'Dirección'}
    ];

    console.log(this.formVista);
  }

  sendForm() {
    console.log('Datos enviados');
  }

  btnClear() {
    this.formVista.reset();
  }
}
