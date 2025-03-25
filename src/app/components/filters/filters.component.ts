import { Component, EventEmitter, Output, OnInit, Input } from "@angular/core";
import { DiccionarioUbicacionesService } from "../../services/diccionario.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  @Output() filterApplied = new EventEmitter<any>();
  sectors: { id: string; label: string }[] = [];
  areas: { id: string; label: string }[] = [];
  selectedSector: { id: string; label: string } | null = null;
  selectedArea: { id: string; label: string } | null = null;
  selectedDay: string = "";
  searchTerm: string = "";
  conEntrevista: boolean = false;
  @Input() isColacion = false;

  constructor(private diccionarioService: DiccionarioUbicacionesService) {}

  ngOnInit() {
    this.diccionarioService.getSalas("1").subscribe({
      next: (response: any) => {
        this.sectors = response.data.map((item: any) => ({
          id: item.id,
          label: item.descripcion || "",
        }));
        const ids = response.data.map((item: any) => item.id);

        ids.forEach((id: string) => {
          this.diccionarioService.getAreas(id).subscribe({
            next: (areaResponse: any) => {
              this.areas = areaResponse.data.map((item: any) => ({
                id: item.id,
                label: item.descripcion || "",
              }));
            },
            error: (error) => {
              console.error(error);
            },
          });
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  applyFilter() {
    const filteredData = {
      sector: this.selectedSector
        ? { id: this.selectedSector.id, label: this.selectedSector.label }
        : null,
      area: this.selectedArea
        ? { id: this.selectedArea.id, label: this.selectedArea.label }
        : null,
      day: this.selectedDay || "",
      searchTerm: this.searchTerm || "",
      conEntrevista: this.conEntrevista || false,
    };
    console.log(filteredData);
    this.filterApplied.emit(filteredData);
  }
}
