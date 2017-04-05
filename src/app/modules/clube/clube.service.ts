import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http"
import {Observable} from 'rxjs/Rx';
import { Clube } from "app/modules/clube/clube";

@Injectable()
export class ClubeService {

  private baseUrl = 'https://tabajarafc-10cdd.firebaseio.com/';

  constructor(private http: Http) { }

  getClubes(): Observable<Clube[]> {
    return this.http.get(`${this.baseUrl}/clube.json`)
       .map((res: Response) => this.convert(res.json()))
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postClube(clube: Clube): Observable<Clube> {
    return this.http.post(`${this.baseUrl}/clube.json`, clube)
      .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pathClube(clube:any): Observable<Clube> {
    let codigo = clube.codigo;
    delete clube.codigo;
    return this.http.patch(`${this.baseUrl}/clube/${codigo}.json`, clube)
      .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteClube(codigoClube:any): Observable<Clube> {
    return this.http.delete(`${this.baseUrl}/clube/${codigoClube}.json`)
      .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private convert(parsedResponse:any) {
    if (parsedResponse) {
      return Object.keys(parsedResponse)
        .map(id => ({
          codigo: id,
          nome: parsedResponse[id].nome,
          presidente: parsedResponse[id].presidente
        }))
        .sort((a, b) => a.nome.localeCompare(b.nome));
    }
    return []
  }

}
