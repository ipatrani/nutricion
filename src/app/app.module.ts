import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColacionComponent } from './modules/comanda-general/colacion/colacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlmuerzoComponent } from './modules/comanda-general/almuerzo/almuerzo.component';
import { CenaComponent } from './modules/comanda-general/cena/cena.component';
import { MeriendaComponent } from './modules/comanda-general/merienda/merienda.component';
import { DesayunoComponent } from './modules/comanda-general/desayuno/desayuno.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./components/home/home.component";
import { AcompananteComponent } from "./modules/comanda-general/acompanante/acompanante.component";
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GenericTableComponent } from './modules/comanda-general/generic-table/generic-table.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from './shared/material/material.module';
import { FiltersComponent } from './components/filters/filters.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    ColacionComponent,
    AlmuerzoComponent,
    CenaComponent,
    MeriendaComponent,
    DesayunoComponent,
    AcompananteComponent,
    GenericTableComponent,
    FiltersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeComponent,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MaterialModule
    
],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true // Permite múltiples interceptores si es necesario
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }