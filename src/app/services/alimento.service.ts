import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Alimento } from '../models/alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {
  private apiUrl = `${environment.apiBaseUrl}/Alimento`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(this.apiUrl);
  }

  getById(id: number): Observable<Alimento> {
    return this.http.get<Alimento>(`${this.apiUrl}/${id}`);
  }

  create(alimento: Alimento): Observable<Alimento> {
    return this.http.post<Alimento>(this.apiUrl, alimento);
  }

  update(id: number, alimento: Alimento): Observable<Alimento> {
    return this.http.put<Alimento>(`${this.apiUrl}/${id}`, alimento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}