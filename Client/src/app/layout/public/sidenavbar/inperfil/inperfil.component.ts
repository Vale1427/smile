import { Component } from '@angular/core';

@Component({
  selector: 'app-inperfil',
  templateUrl: './inperfil.component.html',
  styleUrls: ['./inperfil.component.scss']
})
export class InperfilComponent {
  private isLoggedIn: boolean = false;
  logout() {
    
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
  }
}
