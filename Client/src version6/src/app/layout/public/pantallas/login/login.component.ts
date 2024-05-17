import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule}  from  '@angular/forms' ; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    const randomAngle = Math.floor(Math.random() * 360); // Genera un ángulo aleatorio entre 0 y 359
    document.documentElement.style.setProperty('--random-angle', randomAngle + 'deg');
    this.crearBurbujasRandom()
  }

  datosBurbuja: any =[]


  crearBurbujasRandom(){
    for (let index = 0; index < 25; index++) {
      let indice = index+1;
      let tamaño =  Math.floor(Math.random() * 100);
      let left =  Math.floor(Math.random() * 100);
      let duracion =  Math.floor(Math.random() * 10);
      let retraso =  Math.floor(Math.random() * 5);
      let datos ={
        index: indice,
        tamanio: tamaño,
        left: left,
        duracion: duracion,
        retraso: retraso
      }
      this.datosBurbuja.push(datos)
   }
   }
}
