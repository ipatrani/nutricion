import { Component } from "@angular/core";

@Component({
  selector: "app-merienda",
  templateUrl: "./merienda.component.html",
  styleUrl: "./merienda.component.scss",
})
export class MeriendaComponent {
  displayedColumns: string[] = [
    "ubicacion",
    "diagnostico",
    "nombre",
    "apellido",
    "alergias",
    "dietaIndicada",
    "dietaAdecuada",
    "definir",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "editar",
    "validar",
  ];
  dataSource = ELEMENT_DATA;

  dietas = [
    "Baja en azúcar",
    "Baja en sal",
    "Alta en fibra",
    "Baja en carbohidratos",
  ];
  definiciones = ["Definir 1", "Definir 2", "Definir 3"];
  definir: any;

  liquidos = ["Agua", "Jugo", "Leche"];
  panificados = ["Pan integral", "Pan blanco"];
  reposteria = ["Galletas", "Pastel"];
  untables = ["Mantequilla", "Mermelada"];
  extras = ["Frutas", "Yogur"];
  otrosEspeciales = ["Sin gluten", "Vegano"];

  toggleValidado(element: ComandaData) {
    element.validado = !element.validado;
  }
}
export interface ComandaData {
  ubicacion: string;
  diagnostico: string;
  nombre: string;
  apellido: string;
  alergias: string;
  dietaIndicada: string;
  dietaAdecuada: string;
  definir: string;
  gustosSi: string;
  gustosNo: string;
  anamnesis: string;
  validado: boolean;
  liquidos: string;
  panificados: string;
  reposteria: string;
  untables: string;
  extras: string;
  otrosEspeciales: string;
}

const ELEMENT_DATA: ComandaData[] = [
  {
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombre: "Juan",
    apellido: "Perez",
    alergias: "Ninguna",
    dietaIndicada: "Baja en azúcar",
    dietaAdecuada: "Baja en carbohidratos",
    definir: "Definir 1",
    gustosSi: "Frutas",
    gustosNo: "Azúcar",
    anamnesis: "Paciente con diabetes tipo 2",
    validado: false,
    liquidos: "Agua",
    panificados: "Pan integral",
    reposteria: "Galletas",
    untables: "Mantequilla",
    extras: "Frutas",
    otrosEspeciales: "Sin gluten",
  },
];
