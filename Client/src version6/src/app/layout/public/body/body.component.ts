import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() collapsed : boolean= false;
  @Input()  screenWidth : number = 0;

  getBodyClass(): string{
    let styleClass : string = '';
    if (this.collapsed && this.screenWidth >  768) {
      styleClass = 'cuerpo-extendido';
    } else if (this.collapsed && this.screenWidth <=  768 &&this.screenWidth >0){
      styleClass = "cuerpo-medio";
    }
    return styleClass;
  }
}
