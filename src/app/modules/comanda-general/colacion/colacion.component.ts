import { Component } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";

@Component({
  selector: "app-colacion",
  templateUrl: "./colacion.component.html",
  styleUrls: ["./colacion.component.scss"],
})
export class ColacionComponent {
  displayedColumns: string[] = [
    "selected",
    "ubicacion",
    "nombreYApellido",
    "colacion",
  ];
  dataSource = DATA;
  colaciones: any;

  constructor() {}

  toggleValidado(element: TablaDesayuno) {
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

const DATA = [
  {
    selected: false,
    ubicacion: "Sala 1",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
  },
];
