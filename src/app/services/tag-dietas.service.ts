import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TagDietas } from '../models/tag-dietas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagDietasService {
 private apiUrl = `${environment.apiUrl}/nutricion/Tag`;

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id: number): Observable<TagDietas> {
    return this.http.get<TagDietas>(`${this.apiUrl}/${id}`);
  }

  create(data: TagDietas): Observable<TagDietas> {
    return this.http.post<TagDietas>(`${this.apiUrl}`, data);
  }

  update(id: number, data: TagDietas): Observable<TagDietas> {
    return this.http.put<TagDietas>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
