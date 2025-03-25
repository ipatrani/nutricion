export interface DietaIndicada {
  pataCodigo: number;
  tagCodigo: number;
  tagDescripcion: string;
  tagCodigoInterno: string;
  pataTipo: string;
  pataFechaIndicada: string; // ISO 8601 format
}

export interface DietaAdecuada {
  tagCodigo: number;
  tagDescripcion: string;
  tagCodigoInterno: string;
  tagActivo: boolean;
  tagSeleccionado: boolean;
}

export interface Paciente {
  persApellido?: string;
  persNombre?: string;
  paciCodigo?: number;
  paciHistoriaClinica?: string | null;
  pacmCodigo?: number | null;
  inteUbicacion?: string;
  inteMotivoIngreso?: string;
  dietaIndicada?: DietaIndicada[];
  dietasAdecuadas?: DietaAdecuada[];
}

export interface PacienteResponse {
  status: boolean;
  message: string | null;
  data: Paciente[];
}
