import { Component } from "@angular/core";
import { TablaAlmuerzo } from "../../../models/tabla-almuerzo.model";

@Component({
  selector: "app-almuerzo",
  templateUrl: "./almuerzo.component.html",
  styleUrls: ["./almuerzo.component.scss"],
})
export class AlmuerzoComponent {
  displayedColumns: string[] = [
    "selected",
    "ubicacion",
    "diagnostico",
    "nombreYApellido",
    "alergias",
    "dietaIndicada",
    "dietaAdecuada",
    "entrada",
    "platoPrincipal",
    "guarnicion",
    "postre",
    "bebida",
    "panificados",
    "condimentos",
    "basicos",
    "otrosExtras",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "acciones",
  ];

  dietas: any;
  entradas: any;
  platosPrincipales: any;
  guarniciones: any;
  postres: any;
  bebidas: any;
  panificados: any;
  especiales: any;
  dataSource = DATA;
  condimentos: any;
  basicos: any;

  toggleValidado(element: TablaAlmuerzo) {
    element.validado = !element.validado;
  }
  toggleSelectAll(checked: boolean) {
    this.dataSource.forEach((element) => (element.selected = checked));
  }

  isAllSelected() {
    return this.dataSource.every((element) => element.selected);
  }

  isIndeterminate() {
    const selectedCount = this.dataSource.filter(
      (element) => element.selected
    ).length;
    return selectedCount > 0 && selectedCount < this.dataSource.length;
  }
}

const DATA: TablaAlmuerzo[] = [
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
    alergias: "Ninguna",
    dietaIndicada: "Baja en azúcar",
    dietaAdecuada: "Baja en carbohidratos",
    entrada: "",
    platoPrincipal: "",
    guarnicion: "",
    postre: "",
    bebida: "",
    panificados: "",
    condimentos: "",
    otrosExtras: "",
    gustosSi: "Frutas",
    gustosNo: "Azúcar",
    anamnesis: "Paciente con diabetes tipo 2",
    validado: false,
  },
];
