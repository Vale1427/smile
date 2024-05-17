import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms',
        style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms',
        style({opacity: 0}))
      ])
    ]),
    trigger('rotateX', [
      transition(':enter',[
        animate('500ms',
          keyframes([
            style({transform:'rotate(0deg)', offset: '0'}),
            style({transform:'rotate(1turn)', offset: '1'})

          ])
        )
      ])
    ]),
    trigger('rotateIcon', [
      transition('collapsed => expanded',[
        animate('500ms',
          keyframes([
            style({transform:'rotate(0deg)', offset: 0}),
            style({transform:'rotate(180deg)', offset: 0.5}),
            style({transform:'rotate(360deg)', offset: 1})
          ])
        )
      ]),
      transition('expanded => collapsed',[
        animate('500ms',
          keyframes([
            style({transform:'rotate(360deg)', offset: 0}),
            style({transform:'rotate(180deg)', offset: 0.5}),
            style({transform:'rotate(0deg)', offset: 1})
          ])
        )
      ])
    ])
  ]
})


export class SidenavbarComponent  implements OnInit {

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }


  //#region Animaciones de la pagina
  
  @Output() onTogglSideNav : EventEmitter<any> = new EventEmitter();
  screenWidth =0;


  collapsed = false;
  navData = [
    {
      routeLink : 'home',
      icon: 'fa-solid fa-house',
      label: 'inicio'  
    },
    {
      routeLink : 'mcitas',
      icon: 'fa-solid fa-calendar-days',
      label: 'Mis citas'
    },
    {
      routeLink : 'hmedico',
      icon: 'fa-solid fa-suitcase-medical',
      label: 'Historial Medico'
    },
    {
      routeLink : 'inperfil',
      icon: 'fa-solid fa-circle-user',
      label: 'Mi perfil'
    },
    {
      routeLink : 'cancel',
      icon: 'fa-solid fa-right-to-bracket',
      label: 'Cerrar sesion'
    },
    {
      routeLink : 'clientescitas',
      icon: 'fa-solid fa-calendar-days',
      label: 'Agendar cita de cliente'
    },
    {
      routeLink : 'filcitas',
      icon: 'fa-solid fa-hospital-user',
      label: 'Filtrado de Citas'
    }

  ]


  @HostListener('window:resize', ['$event'])
  onResize(event: any):void{
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=600){
      this.collapsed = false;
      this.onTogglSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
      
    }
  }

  
  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onTogglSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSideNav(): void{
    this.collapsed = false;
    this.onTogglSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})

  }
  //#endregion
  

}
