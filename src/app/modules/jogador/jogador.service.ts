import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http"
import { Observable } from 'rxjs/Rx';
import { Jogador } from "app/modules/jogador/jogador";

@Injectable()
export class JogadorService {

  private baseUrl = 'https://tabajarafc-10cdd.firebaseio.com/';

  constructor(private http:Http) { }

  getJogadores(): Observable<Jogador[]> {
    return this.http.get(`${this.baseUrl}/jogador.json`)
      .map((res: Response) => this.convert(res.json()))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getJogadoresPorClube(): Observable<Jogador>{
    return this.http.get(`${this.baseUrl}/jogador.json`)
      .map((res: Response) => this.convert(res.json()))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postJogador(jogador:any): Observable<Jogador> {
    return this.http.post(`${this.baseUrl}/jogador.json`, jogador)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pathJogador(jogador:any): Observable<Jogador> {
    let codigo = jogador.codigo;
    delete jogador.codigo;
    return this.http.patch(`${this.baseUrl}/jogador/${codigo}.json`, jogador)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteJogador(codJogador:any): Observable<Jogador> {
    return this.http.delete(`${this.baseUrl}/jogador/${codJogador}.json`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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
