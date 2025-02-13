import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ColacionComponent } from './modules/comanda-general/colacion/colacion.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlmuerzoComponent } from './modules/comanda-general/almuerzo/almuerzo.component';
import { CenaComponent } from './modules/comanda-general/cena/cena.component';
import { MeriendaComponent } from './modules/comanda-general/merienda/merienda.component';
import { DesayunoComponent } from './modules/comanda-general/desayuno/desayuno.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    ColacionComponent,
    AlmuerzoComponent,
    CenaComponent,
    MeriendaComponent,
    DesayunoComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HomeComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }