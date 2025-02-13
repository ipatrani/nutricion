import { Component } from "@angular/core";

@Component({
  selector: "app-cena",
  templateUrl: "./cena.component.html",
  styleUrl: "./cena.component.scss",
})
export class CenaComponent {
  displayedColumns: string[] = [
    "ubicacion",
    "diagnostico",
    "nombre",
    "apellido",
    "alergias",
    "dietaIndicada",
    "dietaAdecuada",
    "entrada",
    "platoPrincipal",
    "guarnicion",
    "postre",
    "bebida",
    "panificados",
    "otroEspeciales",
    "gustosSi",
    "gustosNo",
    "anamnesis",
    "editar",
    "validar",
  ];

  dietas: any;
  entradas: any;
  platosPrincipales: any;
  guarniciones: any;
  postres: any;
  bebidas: any;
  panificados: any;
  especiales: any;

  dataSource = [
    {
      ubicacion: "Ubicación 1",
      diagnostico: "Diagnóstico 1",
      nombre: "Nombre 1",
      apellido: "Apellido 1",
      alergias: "Alergias 1",
      dietaIndicada: "Dieta 1",
      dietaAdecuada: "Dieta 1",
      entrada: "Entrada 1",
      platoPrincipal: "Plato 1",
      guarnicion: "Guarnición 1",
      postre: "Postre 1",
      bebida: "Bebida 1",
      panificados: "Panificado 1",
      otroEspeciales: "Especial 1",
      gustosSi: "Gustos Sí 1",
      gustosNo: "Gustos No 1",
      anamnesis: "Anamnesis 1",
      validado: false,
    },
  ];

  columnDefinitions = [
    { field: "ubicacion", header: "Ubicación" },
    { field: "diagnostico", header: "Diagnóstico" },
    { field: "nombre", header: "Nombre" },
    { field: "apellido", header: "Apellido" },
    { field: "alergias", header: "Alergias" },
    { field: "dietaIndicada", header: "Dieta Indicada" },
    { field: "dietaAdecuada", header: "Dieta Adecuada" },
    { field: "entrada", header: "Entrada" },
    { field: "platoPrincipal", header: "Plato Principal" },
    { field: "guarnicion", header: "Guarnición" },
    { field: "postre", header: "Postre" },
    { field: "bebida", header: "Bebida" },
    { field: "panificados", header: "Panificados" },
    { field: "otroEspeciales", header: "Otro/Especiales" },
    { field: "gustosSi", header: "Gustos Sí" },
    { field: "gustosNo", header: "Gustos No" },
    { field: "anamnesis", header: "Anamnesis" },
    { field: "editar", header: "Editar" },
    { field: "validar", header: "Validar" },
  ];

  toggleValidado(element: any) {
    element["validado"] = !element["validado"];
  }
}
