import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ComidaTipoService {
  private apiUrl = `${environment.apiUrl}nutricion/ComidaTipo`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(comidaTipo: any) {
    return this.http.post(`${this.apiUrl}`, comidaTipo);
  }

  update(id: number, comidaTipo: any) {
    return this.http.put(`${this.apiUrl}/${id}`, comidaTipo);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
