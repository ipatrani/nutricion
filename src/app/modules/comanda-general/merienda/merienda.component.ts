import { Component } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";

@Component({
  selector: "app-merienda",
  templateUrl: "./merienda.component.html",
  styleUrl: "./merienda.component.scss",
})
export class MeriendaComponent {
  displayedColumns: string[] = [
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
  dataSource = DATA;

  dietas = [];
  definiciones = [];
  liquidos = [];
  panificados = [];
  reposteria = [];
  untables = [];
  extras = [];
  otrosExtras = [];
  liquidosFrios = [];
  definir = "";

  constructor() {}

  toggleValidado(element: TablaDesayuno) {
    element.validado = !element.validado;
  }

  toggleSelectAll(checked: boolean) {
  this.dataSource.forEach(element => element.selected = checked);
}

isAllSelected() {
  return this.dataSource.every(element => element.selected);
}

isIndeterminate() {
  const selectedCount = this.dataSource.filter(element => element.selected).length;
  return console.log( selectedCount > 0 && selectedCount < this.dataSource.length);
}

}

const DATA: TablaDesayuno[] = [
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez",
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
    liquidosFrios: "Leche",
    extras: "Frutas",
    otrosExtras: "Sin gluten",
  },
];
