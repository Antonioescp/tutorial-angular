import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from './shared/crud-service';
import { ActualizarCiudadDto } from './shared/dtos/ciudades/actualizar-ciudad-dto';
import { CrearCiudadDto } from './shared/dtos/ciudades/crear-ciudad-dto';
import { Ciudad } from './shared/models/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService implements CrudService<Ciudad, CrearCiudadDto, ActualizarCiudadDto> {

  readonly ciudadesUrl = '/api/Ciudades/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.ciudadesUrl);
  }

  getById(id: number): Observable<Ciudad> {
    const ciudadUrl = `${this.ciudadesUrl}${id}`;
    return this.http.get<Ciudad>(ciudadUrl);
  }

  create(data: CrearCiudadDto): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ciudadesUrl, data);
  }

  update(data: ActualizarCiudadDto): Observable<HttpResponse<any>> {
    const ciudadUrl = `${this.ciudadesUrl}${data.id}`
    return this.http.put<any>(ciudadUrl, data);
  }

  deleteById(id: number): Observable<HttpResponse<any>> {
    const ciudadUrl = `${this.ciudadesUrl}${id}`;
    return this.http.delete<any>(ciudadUrl);
  }
}
