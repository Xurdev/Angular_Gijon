import { Component, OnInit } from '@angular/core';
import { Printer, Department } from '../../models/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  public aPrinters: Array<Printer>;
  public aDepartments: Array<Department>;
  public formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
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

    this.formGroup = new FormGroup({
      name: new FormControl('Pepe',
            [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('Perez',
            Validators.required),
      phoneNumber: new FormControl('',
            [Validators.required, Validators.pattern('^\\d{9}$')]),
      printer: new FormControl(),
      isColour: new FormControl(true),
      isLight: new FormControl(true),
      department: new FormControl()
    });

  }

  btnSend() {

  }

  btnClear() {

  }

  sendForm() {

  }

}
