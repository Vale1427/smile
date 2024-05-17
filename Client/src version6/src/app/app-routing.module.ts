import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule}  from  '@angular/forms' ; 
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/public/pantallas/home/home.component';
import { LoginComponent } from './layout/public/pantallas/login/login.component';
import { CitasComponent } from './layout/public/pantallas/citas/citas.component';
import { TestimoniosComponent} from './layout/public/pantallas/testimonios/testimonios.component'
import { TratamientosComponent } from './layout/public/pantallas/tratamientos/tratamientos.component'
import { ErrorComponent } from './layout/public/pantallas/error/error.component';
import { MapasitioComponent } from './layout/public/pantallas/mapasitio/mapasitio.component';
import { RegistroComponent } from './layout/public/pantallas/registro/registro.component';
import { McitasComponent } from './layout/public/sidenavbar/mcitas/mcitas.component';
import { HmedicoComponent } from './layout/public/sidenavbar/hmedico/hmedico.component';
import { InperfilComponent } from './layout/public/sidenavbar/inperfil/inperfil.component';
import { DescuentosComponent } from './layout/public/sidenavbar/descuentos/descuentos.component';
import { ContactanosComponent } from './layout/public/pantallas/contactanos/contactanos.component';
import { AvisoprivComponent } from './layout/public/pantallas/avisopriv/avisopriv.component';
import { ClientescitasComponent } from './layout/public/pantallas/clientescitas/clientescitas.component';
import { FilcitasComponent } from './layout/public/pantallas/filcitas/filcitas.component';
import  { InfBrackComponent } from './layout/public/pantallas/inf-brack/inf-brack.component';
import { LimdentComponent } from './layout/public/pantallas/limdent/limdent.component';
import { ExtracComponent } from './layout/public/pantallas/extrac/extrac.component';
import { MuelasComponent } from './layout/public/pantallas/muelas/muelas.component';
import { NinosComponent } from './layout/public/pantallas/ninos/ninos.component';
import { EmergenciaComponent } from './layout/public/pantallas/emergencia/emergencia.component';
import { MigaspanComponent } from './layout/public/pantallas/migaspan/migaspan.component';
import {  NgxCaptchaModule  }  from  'ngx-captcha' ;



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'citas',
    component: CitasComponent
  },
  {
    path: 'testimonios',
    component:TestimoniosComponent

  },
  {
    path: 'tratamientos',
    component:TratamientosComponent

  },
  {
    path: 'error',
    component:ErrorComponent

  },
  {
    path: 'mapasitio',
    component:MapasitioComponent

  },
  {
    path: 'registro',
    component:RegistroComponent

  },
  {
    path: 'mcitas',
    component:McitasComponent

  },
  {
    path: 'hmedico',
    component:HmedicoComponent

  }
  ,
  {
    path: 'inperfil',
    component:InperfilComponent

  },
  {
    path: 'descuentos',
    component:DescuentosComponent

  },
  {
    path: 'contactanos',
    component:ContactanosComponent

  },
  {
    path: 'avisopriv',
    component:AvisoprivComponent

  },
  {
    path: 'clientescitas',
    component:ClientescitasComponent

  },
  {
    path: 'filcitas',
    component:FilcitasComponent

  },
  {
    path: 'inf-brack',
    component:InfBrackComponent

  },
  {
    path: 'limdent',
    component:LimdentComponent

  },
  {
    path: 'extrac',
    component:ExtracComponent

  },
  {
    path: 'muelas',
    component:MuelasComponent

  },
  {
    path: 'ninos',
    component:NinosComponent

  },
  {
    path: 'emergencia',
    component:EmergenciaComponent

  },
  {
    path: 'migaspan',
    component:MigaspanComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule  
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
