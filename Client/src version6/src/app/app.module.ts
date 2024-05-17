import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './layout/public/navbar/sidenavbar/sidenavbar.component';; 
import { UpnavbarComponent } from './layout/public/navbar/upnavbar/upnavbar.component';
import { HomeComponent } from './layout/public/pantallas/home/home.component';
import { BodyComponent } from './layout/public/body/body.component';
import { LoginComponent } from './layout/public/pantallas/login/login.component';
import { HorarionavComponent } from './layout/public/navbar/horarionav/horarionav.component';
import { FooterComponent } from './layout/public/navbar/footer/footer.component';
import { CitasComponent } from './layout/public/pantallas/citas/citas.component';
import { TestimoniosComponent } from './layout/public/pantallas/testimonios/testimonios.component';
import { TratamientosComponent } from './layout/public/pantallas/tratamientos/tratamientos.component';
import { ErrorComponent } from './layout/public/pantallas/error/error.component';
import { MapasitioComponent } from './layout/public/pantallas/mapasitio/mapasitio.component';
import { RegistroComponent } from './layout/public/pantallas/registro/registro.component';
import { McitasComponent } from './layout/public/sidenavbar/mcitas/mcitas.component';
import { HmedicoComponent } from './layout/public/sidenavbar/hmedico/hmedico.component';
import { InperfilComponent } from './layout/public/sidenavbar/inperfil/inperfil.component';
import { DescuentosComponent } from './layout/public/sidenavbar/descuentos/descuentos.component';
import { ContactanosComponent } from './layout/public/pantallas/contactanos/contactanos.component';
import { EditarcitaComponent } from './layout/public/pantallas/editarcita/editarcita.component';
import { AvisoprivComponent } from './layout/public/pantallas/avisopriv/avisopriv.component';
import { ClientescitasComponent } from './layout/public/pantallas/clientescitas/clientescitas.component';
import { FilcitasComponent } from './layout/public/pantallas/filcitas/filcitas.component';
import { InfBrackComponent } from './layout/public/pantallas/inf-brack/inf-brack.component';
import { LimdentComponent } from './layout/public/pantallas/limdent/limdent.component';
import { ExtracComponent } from './layout/public/pantallas/extrac/extrac.component';
import { MuelasComponent } from './layout/public/pantallas/muelas/muelas.component';
import { NinosComponent } from './layout/public/pantallas/ninos/ninos.component';
import { EmergenciaComponent } from './layout/public/pantallas/emergencia/emergencia.component';
import { MigaspanComponent } from './layout/public/pantallas/migaspan/migaspan.component';
import { RecaptchaComponent } from './layout/public/navbar/recaptcha/recaptcha.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    UpnavbarComponent,
    HomeComponent,
    BodyComponent,
    LoginComponent,
    HorarionavComponent,
    FooterComponent,
    CitasComponent,
    TestimoniosComponent,
    TratamientosComponent,
    ErrorComponent,
    MapasitioComponent,
    RegistroComponent,
    McitasComponent,
    HmedicoComponent,
    InperfilComponent,
    DescuentosComponent,
    ContactanosComponent,
    EditarcitaComponent,
    AvisoprivComponent,
    ClientescitasComponent,
    FilcitasComponent,
    InfBrackComponent,
    LimdentComponent,
    ExtracComponent,
    MuelasComponent,
    NinosComponent,
    EmergenciaComponent,
    MigaspanComponent,
    RecaptchaComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
