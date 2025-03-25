import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { MenuTipo } from "../models/menu-tipo.model";

@Injectable({
  providedIn: "root",
})
export class MenuTipoService {
  private apiUrl = `${environment.apiUrl}/nutricion/MenuTipo`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id: number): Observable<MenuTipo> {
    return this.http.get<MenuTipo>(`${this.apiUrl}/${id}`);
  }

  create(data: MenuTipo): Observable<MenuTipo> {
    return this.http.post<MenuTipo>(`${this.apiUrl}`, data);
  }

  update(id: number, data: MenuTipo): Observable<MenuTipo> {
    return this.http.put<MenuTipo>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
