import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Administrar } from "../models/administrar.model";

@Injectable({
  providedIn: "root",
})
export class ComandaService {
  private apiUrl = `${environment.apiUrl}/nutricion/api/Comanda`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  createAdministrar(body: Administrar) {
    return this.http.post(`${this.apiUrl}/Administrar`, body);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
