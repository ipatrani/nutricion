import { Component, EventEmitter, Output, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  @Output() filterApplied = new EventEmitter<any>();
  sectors: string[] = ["Sala 1", "Sala 2", "Sala 3"];
  days: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  selectedSector: string = "";
  selectedDay: string = "";
  searchTerm: string = "";

  ngOnInit() {}

  applyFilter() {
    const filteredData = {
      sector: this.selectedSector || "",
      day: this.selectedDay || "",
      searchTerm: this.searchTerm || "",
    };
    console.log(filteredData)
    this.filterApplied.emit(filteredData);
  }
}