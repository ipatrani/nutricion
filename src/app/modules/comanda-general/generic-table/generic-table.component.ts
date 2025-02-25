import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface TableRow {
  selected?: boolean;
  validado?: boolean;
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent<T> implements OnInit {
  @Input() tableName: string = '';
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: T[] = [];
  @Input() selectable: boolean = false;

  tableDataSource!: MatTableDataSource<TableRow>;
  selection = new SelectionModel<TableRow>(true, []);

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource<TableRow>(
      this.dataSource.map(item => ({ ...item, selected: false, validado: false }))
    );
  }

  toggleValidado(element: TableRow) {
    element.validado = !element.validado;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tableDataSource.data.forEach(row => this.selection.select(row));
  }

  isIndeterminate() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected > 0 && numSelected < numRows;
  }

  getColumnNames(): string[] {
    const columnNames = [...this.displayedColumns];
    if (this.selectable) {
      columnNames.unshift('selected');
    }
    columnNames.push('acciones');
    return columnNames;
  }
}