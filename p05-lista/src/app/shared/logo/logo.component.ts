import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img [src]="sLogo" class="img-fluid"/>
  `,
  styles: []
})
export class LogoComponent implements OnInit {

  public sLogo: string;

  constructor() { }

  ngOnInit() {
    this.sLogo = '../../../assets/logoAngular.svg';
  }

}
