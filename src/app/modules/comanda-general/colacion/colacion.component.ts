import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { TablaAlmuerzo } from "../../../models/tabla-almuerzo.model";

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
  dataSource = new MatTableDataSource([
    {
      selected: false,
      ubicacion: "Sala 1",
      nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
    },
  ]);
  colaciones: any;

  constructor() {}

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  toggleValidado(element: TablaAlmuerzo) {
    element.validado = !element.validado;
  }

  toggleSelectAll(checked: boolean) {
    this.dataSource.data.forEach((element) => (element.selected = checked));
  }

  isAllSelected() {
    return this.dataSource.data.every((element) => element.selected);
  }

  isIndeterminate() {
    const selectedCount = this.dataSource.data.filter(
      (element) => element.selected
    ).length;
    return selectedCount > 0 && selectedCount < this.dataSource.data.length;
  }
}
