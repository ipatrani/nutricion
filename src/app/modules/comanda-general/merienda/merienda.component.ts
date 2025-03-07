import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";
import { FormControl } from "@angular/forms";
import { Observable, startWith, map } from "rxjs";
import { Dieta } from "../../../models/dieta";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
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
         extras: "Extra",
         otrosExtras: "Sin gluten",
       },
       // ... otros elementos ...
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
   
     constructor() {}
   
     @ViewChild(MatPaginator)
     paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
   
     ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;
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
   
     onDietaAdecuadaChange(element: any, value: any) {
       console.log(`Dieta seleccionada para ${JSON.stringify(element)}: ${value}`);
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