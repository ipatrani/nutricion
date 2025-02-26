import { Component } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { Dieta } from "../../../models/dieta";

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
    "otrosExtras",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "acciones",
  ];
  dataSource = DATA;

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

  constructor() {}

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

  onDietaAdecuadaChange(element: any, value: any) {
    console.log(`Dieta seleccionada para ${JSON.stringify(element)}: ${value}`);
  }
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

const DATA: TablaDesayuno[] = [
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
  {
    selected: false,
    ubicacion: "Sala 1",
    diagnostico: "Diabetes",
    nombreYApellido: "Juan Pérez HC: 123 DNI: 12345678",
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
    basicos: "Frutas",
    otrosExtras: "Sin gluten",
  },
];
