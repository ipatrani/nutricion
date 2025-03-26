import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  Input,
  OnInit,
} from "@angular/core";
import { TablaDesayuno } from "../../../models/tabla-desayuno.model";
import { FormControl } from "@angular/forms";
import { Observable, startWith, map } from "rxjs";
import { Dieta } from "../../../models/dieta.model";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { TagDietasService } from "../../../services/tag-dietas.service";
import { Administrar } from "../../../models/administrar.model";
import { ComandaService } from "../../../services/comanda.service";

@Component({
  selector: "app-merienda",
  templateUrl: "./merienda.component.html",
  styleUrl: "./merienda.component.scss",
})
export class MeriendaComponent implements OnInit {
  @Input() comidaTipo: string[] = [];
  @Input() metiCodigo: number = 0;
  displayedColumns: string[] = [
    "selected",
    "ubicacion",
    "nombreYApellido",
    "diagnostico",
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
  dataSource = new MatTableDataSource<TablaDesayuno>([]);
  dietas: Dieta[] = [];
  dietaFilterCtrl = new FormControl("");
  filteredDietas!: Observable<any[]>;
  filterCriteria = {
    sectorpiso: "",
    sectorLabel: "",
    day: "",
    searchTerm: "",
    areas: "",
    areaLabel: "",
    conEntrevista: false,
  };

  constructor(
    private tagDietasService: TagDietasService,
    private comandaService: ComandaService
  ) {}

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async ngOnInit() {
    this.tagDietasService.getAll().subscribe({
      next: (response: any) => {
        this.dietas = response.data.map((item: any) => ({
          id: item.tagCodigo,
          nombre: item.tagDescripcion,
        }));

        this.filteredDietas = this.dietaFilterCtrl.valueChanges.pipe(
          startWith(""),
          map((value) => this._filterDietas(value ?? ""))
        );
      },
      error: (error) => {
        console.error("Error dietas", error);
      },
    });

    this.filterCriteria = {
      sectorpiso: "",
      sectorLabel: "",
      day: new Date().toISOString(),
      searchTerm: "",
      areas: "",
      areaLabel: "",
      conEntrevista: false,
    };
    await this.fetchPacientes();
  }

  onFilterApplied(filter: any) {
    this.setFilterCriteria(filter);
    this.dataSource.filterPredicate = this.createFilterPredicate(filter);
    this.dataSource.filter = JSON.stringify(filter);
  }

  setFilterCriteria(filter: any) {
    this.filterCriteria = {
      sectorpiso: filter.sector?.id || "",
      sectorLabel: filter.sector?.label || "",
      day: filter.day ? new Date(filter.day).toISOString() : "",
      searchTerm: filter.searchTerm || "",
      areas: filter.area?.id || "",
      areaLabel: filter.area?.label || "",
      conEntrevista: filter.conEntrevista || false,
    };
  }

  createFilterPredicate(filter: any): (data: any) => boolean {
    const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "");

    return (data: any) => {
      const sectorMatch =
        !this.filterCriteria.sectorpiso ||
        normalize(data.ubicacion).includes(
          normalize(filter.sector.label || "")
        );
      const dayMatch =
        !this.filterCriteria.day ||
        data.diagnostico.includes(this.filterCriteria.day);
      const searchTermMatch =
        !this.filterCriteria.searchTerm ||
        data.nombreYApellido
          .toLowerCase()
          .includes(this.filterCriteria.searchTerm.toLowerCase());
      const areaMatch =
        !this.filterCriteria.areas ||
        data.areas
          ?.toLowerCase()
          .includes(this.filterCriteria.areas.toLowerCase());

      return sectorMatch && dayMatch && searchTermMatch && areaMatch;
    };
  }

  _filterDietas(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.dietas.filter((dieta) =>
      dieta.nombre.toLowerCase().includes(filterValue)
    );
  }

  getSelectedValuesFromDataSource() {
    return this.dataSource.data.map((element) => ({
      dietaAdecuada: element.dietaAdecuada,
      liquidos: element.liquidos,
      panificados: element.panificados,
      reposteria: element.reposteria,
      untables: element.untables,
      liquidosFrios: element.liquidosFrios,
      basicos: element.basicos,
      extras: element.extras,
    }));
  }

  fetchPacientes() {
    const body: Administrar = {
      ubicCodigo: 1, // valor fijo para Hospital Austral
      salaCodigo: Number(this.filterCriteria.sectorpiso),
      areaCodigo: Number(this.filterCriteria.areas),
      ubipCodigo: 0, // innutilizable por el momento
      fecha: this.filterCriteria.day,
      search: this.filterCriteria.searchTerm,
      metiCodigo: this.metiCodigo,
      misPacientes: false, // innutilizable por el momento
      conEntrevista: this.filterCriteria.conEntrevista,
      tagCodigo: [0],
    };

    this.comandaService.createAdministrar(body).subscribe(
      (response: any) => {
        if (response.status && response.data) {
          console.log(response.data);

          this.dataSource.data = response.data.map((paciente: any) => {
            const tipoComidas = paciente.tipoComidas || [];
            return {
              nombreYApellido: `${paciente.persApellido} ${paciente.persNombre}`,
              historiaClinica:
                paciente.paciHistoriaClinica ?? "Sin historia clínica",
              dni: paciente.persNroDocumento,
              ubicacion: paciente.inteUbicacion,
              diagnostico: paciente.inteMotivoIngreso,
              dietaIndicada: paciente.dietaIndicada
                ? paciente.dietaIndicada
                    .map((dieta: any) => dieta.tagDescripcion)
                    .join(", ")
                : "Sin dieta indicada",
              dietaAdecuada: paciente.dietasAdecuadas || [],
              bebidas: this.getComidasByTipo(tipoComidas, "Bebida"),
              panificados: [],
              panificadosOptions: this.getComidasByTipo(
                tipoComidas,
                "Panificados"
              ),
              reposteria: [],
              reposteriaOptions: this.getComidasByTipo(
                tipoComidas,
                "Repostería"
              ),
              untables: [],
              untablesOptions: this.getComidasByTipo(tipoComidas, "Untables"),
              liquidosFrios: [],
              liquidosFriosOptions: this.getComidasByTipo(
                tipoComidas,
                "Líquidos fríos"
              ),
              basicos: this.getComidasByTipo(tipoComidas, "Básicos"),
              extras: this.getComidasByTipo(tipoComidas, "Extras"),
              gustosSi:
                paciente.gustosSi
                  ?.map((gusto: any) => gusto.descripcion)
                  .join(", ") || "Sin gustos",
              gustosNo:
                paciente.gustosNo
                  ?.map((gusto: any) => gusto.descripcion)
                  .join(", ") || "Sin gustos",
              otros: paciente.otros ?? "Sin otros",
              anamnesis: paciente.anemesis ?? "Sin anamnesis",
              selected: false,
            };
          });
        } else {
          console.error("Error in response data:", response.message);
          this.dataSource.data = [];
        }
      },
      (error) => {
        console.error("Error fetching pacientes:", error);
        this.dataSource.data = [];
      }
    );
  }

  getComidasByTipo(tipoComidas: any[], tipo: string) {
    const tipoComida = tipoComidas.find(
      (item: any) => item.cotiDescripcion.trim() === tipo.trim()
    );
    if (!tipoComida || !tipoComida.comidas) {
      return [];
    }

    return tipoComida.comidas.map((comida: any) => ({
      id: comida.comiCodigo,
      descripcion: comida.comiDescripcion,
    }));
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
