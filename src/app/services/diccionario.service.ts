import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DiccionarioUbicacionesService {
  private apiUrl = `${environment.apiUrl}/sistema/Diccionario`;

  constructor(private http: HttpClient) {}

  getUbicaciones() {
    return this.http.get(`${this.apiUrl}/Ubicaciones`);
  }

  getSalas(id: string) {
    return this.http.get(`${this.apiUrl}/Salas`, { params: { id } });
  }

  getAreas(id: string) {
    return this.http.get(`${this.apiUrl}/Areas`, { params: { id } });
  }

  getPisos(id: string) {
    return this.http.get(`${this.apiUrl}/Pisos`, { params: { id } });
  }
}
