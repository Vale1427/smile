import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute ){
    
  }

 
  rutaHome : boolean = true;

  ngOnInit(): void {
    var rutaActual = this.activatedRoute.snapshot.url;
    var rutaEscogida: boolean = rutaActual.some(routeSegment => routeSegment.path === 'home')
    this.rutaHome = rutaEscogida ? true : !this.rutaHome;
  }

}
