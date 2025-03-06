import { Component } from "@angular/core";

interface Comida {
  ubicacion: string;
  diagnostico: string;
  nombreYApellido: string;
  alergias: string;
  dietaIndicada: string;
  dietaAdecuada: string;
  liquidos: string;
  panificados: string;
  reposteria: string;
  untables: string;
  liquidosFrios: string;
  basicos: string;
  extras: string[];
  otrosExtras: string;
  gustosSi: string;
  gustosNo: string;
  anamnesis: string;
  validado?: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  desayunoData: Comida[] = [
    {
      ubicacion: "Mesa 1",
      diagnostico: "Diabetes Tipo 2",
      nombreYApellido: "Juan Pérez HC: 12345 DNI: 12345678",
      alergias: "Ninguna",
      dietaIndicada: "Baja en carbohidratos",
      dietaAdecuada: "",
      liquidos: "",
      panificados: "",
      reposteria: "",
      untables: "",
      liquidosFrios: "",
      basicos: "",
      extras: [],
      otrosExtras: "",
      gustosSi: "Frutas frescas",
      gustosNo: "Azúcar",
      anamnesis: "Paciente con control regular",
    },
    {
      ubicacion: "Mesa 2",
      diagnostico: "Hipertensión",
      nombreYApellido: "María Gómez HC: 67890 DNI: 87654321",
      alergias: "Mariscos",
      dietaIndicada: "Baja en sodio",
      dietaAdecuada: "",
      liquidos: "",
      panificados: "",
      reposteria: "",
      untables: "",
      liquidosFrios: "",
      basicos: "",
      extras: [],
      otrosExtras: "",
      gustosSi: "Verduras cocidas",
      gustosNo: "Sal",
      anamnesis: "Control adecuado de la presión arterial",
    },
  ];

  displayedColumns: string[] = [
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
  ];

  selectColumns: string[] = [
    "dietaIndicada",
    "dietaAdecuada",
    "liquidos",
    "panificados",
    "reposteria",
    "untables",
    "liquidosFrios",
    "basicos",
    "extras",
  ];

  selectOptions: { [key: string]: string[] } = {
    dietaIndicada: [
      "Baja en carbohidratos",
      "Alta en proteínas",
      "Vegetariana",
    ],
    dietaAdecuada: [
      "Baja en carbohidratos",
      "Alta en proteínas",
      "Vegetariana",
    ],
    liquidos: ["Agua", "Jugo", "Té"],
    panificados: ["Pan integral", "Pan blanco"],
    reposteria: ["Galletas", "Pasteles"],
    untables: ["Mantequilla", "Mermelada"],
    liquidosFrios: ["Agua", "Jugo"],
    basicos: ["Arroz", "Pasta"],
    extras: ["Fruta", "Yogur"],
  };
}
