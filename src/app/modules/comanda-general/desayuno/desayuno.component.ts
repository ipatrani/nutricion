import { Component } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno";

@Component({
  selector: "app-desayuno",
  templateUrl: "./desayuno.component.html",
  styleUrls: ["./desayuno.component.scss"],
})
export class DesayunoComponent {
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
  liquidos = ["Agua", "Jugo", "Leche"];
  panificados = ["Pan integral", "Pan blanco"];
  reposteria = ["Galletas", "Pastel"];
  untables = ["Mantequilla", "Mermelada"];
  extras = ["Frutas", "Yogur"];
  otrosEspeciales = ["Sin gluten", "Vegano"];
  definir: any;
  alimentos: any;

  constructor() {}

  toggleValidado(element: TablaDesayuno) {
    element.validado = !element.validado;
  }
}

const ELEMENT_DATA: TablaDesayuno[] = [
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
