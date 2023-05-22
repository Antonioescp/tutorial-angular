import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CrudService<Model, ModelCreateDto = Model, ModelUpdateDto = ModelCreateDto> {
  getAll(): Observable<Model[]>;
  getById(id: number): Observable<Model>;
  create(data: ModelCreateDto): Observable<HttpResponse<any>>;
  update(data: ModelUpdateDto): Observable<HttpResponse<any>>;
  deleteById(id: number): Observable<HttpResponse<any>>;
}
