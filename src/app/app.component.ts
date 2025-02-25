import { Component } from '@angular/core';
export interface User {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  displayedColumns = [
    "selected",
    "ubicacion",
    "diagnostico",
    "nombreYApellido",
    "alergias",
    "dietaIndicada",
    "dietaAdecuada",
    "liquidos",
    "panificados",
    "reposteria",
    "untables",
    "liquidosFrios",
    "extras",
    "otrosExtras",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "acciones",
  ];

  dataSource: User[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Admin', activo: true },
    { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Usuario', activo: false },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Invitado', activo: true }
  ];

  selectable = true;


}