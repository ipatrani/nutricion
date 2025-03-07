import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { TablaAlmuerzo } from "../../../models/tabla-almuerzo.model";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-acompanante",
  templateUrl: "./acompanante.component.html",
  styleUrl: "./acompanante.component.scss",
})
export class AcompananteComponent {
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

  dataSource = new MatTableDataSource([
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
  ]);
  condimentos: any;

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
