import { Injectable } from '@angular/core';
import { Http, HttpModule, JsonpModule } from "@angular/http"
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClubeService {

  private baseUrl = 'https://tabajarafc-10cdd.firebaseio.com/';

  constructor(private http: Http) { }

  getClubes() {
    return this.http.get(`${this.baseUrl}/clube.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  postClube(clube:any) {
    return this.http.post(`${this.baseUrl}/clube.json`, clube)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  pathClube(clube:any) {
    let codigo = clube.codigo;
    delete clube.codigo;
    return this.http.patch(`${this.baseUrl}/clube/${codigo}.json`, clube)
      .toPromise();
  }

  deleteClube(codigoClube:any) {
    console.log("Service " + codigoClube)
    return this.http.delete(`${this.baseUrl}/clube/${codigoClube}.json`)
      .toPromise();
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
