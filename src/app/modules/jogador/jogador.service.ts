import { Injectable } from '@angular/core';
import {Http,HttpModule,JsonpModule} from "@angular/http"

@Injectable()
export class JogadorService {

  private baseUrl = 'https://tabajarafc-10cdd.firebaseio.com/';

  constructor(private http:Http) { }

  getJogadores() {
    return this.http.get(`${this.baseUrl}/jogador.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  getJogadoresPorClube(){
    return this.http.get(`${this.baseUrl}/jogador.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  postJogador(jogador:any) {
    return this.http.post(`${this.baseUrl}/jogador.json`, jogador)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  pathJogador(jogador:any) {
    let codigo = jogador.codigo;
    delete jogador.codigo;
    return this.http.patch(`${this.baseUrl}/jogador/${codigo}.json`, jogador)
      .toPromise();
  }

  deleteJogador(codJogador:any) {
    console.log("Service " + codJogador)
    return this.http.delete(`${this.baseUrl}/jogador/${codJogador}.json`)
      .toPromise();
  }


 private convert(parsedResponse:any) {
   if (parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        codigo: id,
        nome: parsedResponse[id].nome,
        idade: parsedResponse[id].idade,
        clube: parsedResponse[id].clube
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
   }
   return []
  }

}
