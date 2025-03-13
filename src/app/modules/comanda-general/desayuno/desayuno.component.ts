import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { Dieta } from "../../../models/dieta";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-desayuno",
  templateUrl: "./desayuno.component.html",
  styleUrls: ["./desayuno.component.scss"],
})
export class DesayunoComponent {
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
    "basicos",
    "extras",
    "otrosExtras",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "acciones",
  ];
  dataSource = new MatTableDataSource([
    {
      selected: false,
      ubicacion: "Sala 1",
      diagnostico: "Diabetes",
      nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
      alergias: "Ninguna",
      dietaIndicada: "Baja en azúcar",
      dietaAdecuada: [],
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
      basicos: "Frutas",
      extras: [],
      otrosExtras: "Sin gluten",
    },
    {
      selected: false,
      ubicacion: "Sala 1",
      diagnostico: "Diabetes",
      nombreYApellido: "Diego Pérez HC: 123 DNI: 12345678",
      alergias: "Ninguna",
      dietaIndicada: "Baja en azúcar",
      dietaAdecuada: [],
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
      basicos: "Frutas",
      extras: [],
      otrosExtras: "Sin gluten",
    },
    {
      selected: false,
      ubicacion: "Sala 2",
      diagnostico: "Diabetes",
      nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
      alergias: "Ninguna",
      dietaIndicada: "Baja en azúcar",
      dietaAdecuada: [],
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
      basicos: "Frutas",
      extras: [],
      otrosExtras: "Sin gluten",
    },
    {
      selected: false,
      ubicacion: "Sala 3",
      diagnostico: "Diabetes",
      nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
      alergias: "Ninguna",
      dietaIndicada: "Baja en azúcar",
      dietaAdecuada: [],
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
      basicos: "Frutas",
      extras: [],
      otrosExtras: "Sin gluten",
    },
  ]);
  dietas: Dieta[] = [
    { id: "1", nombre: "Dieta baja en calorías" },
    { id: "2", nombre: "Dieta para diabéticos" },
    { id: "3", nombre: "Dieta vegetariana" },
  ];
  dietaFilterCtrl = new FormControl("");
  filteredDietas!: Observable<any[]>;
  definiciones = [];
  liquidos = [];
  panificados = [];
  reposteria = [];
  untables = [];
  basicos = [];
  otrosExtras = [];
  liquidosFrios = [];
  definir = "";
  extrasList = ["algo1", "algo2", "algo3", "otros"];
  filteredData = this.dataSource.data;

  constructor() {}

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  onFilterApplied(filter: any) {
    console.log("Filtros recibidos:", filter);
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const parsedFilter = JSON.parse(filter);
      return (
        (!parsedFilter.sector ||
          data.ubicacion.includes(parsedFilter.sector)) &&
        (!parsedFilter.day || data.diagnostico.includes(parsedFilter.day)) &&
        (!parsedFilter.searchTerm ||
          data.nombreYApellido
            .toLowerCase()
            .includes(parsedFilter.searchTerm.toLowerCase()))
      );
    };

    this.dataSource.filter = JSON.stringify(filter);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.filteredDietas = this.dietaFilterCtrl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filterDietas(value ?? ""))
    );
  }

  private _filterDietas(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.dietas.filter((dieta) =>
      dieta.nombre.toLowerCase().includes(filterValue)
    );
  }

  onDietaAdecuadaChange(element: any, value: any[]) {
    element.dietaAdecuada = value;
  }

  toggleValidado(element: TablaDesayuno) {
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
