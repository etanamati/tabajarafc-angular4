import { TestBed, inject } from '@angular/core/testing';

import { JogadorService } from './jogador.service';
import { Observable } from "rxjs/Rx";
import { Jogador } from "app/modules/jogador/jogador";

describe('JogadorService', () => {
  let http: any;
  let jogadorService: JogadorService;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'post', 'patch', 'delete']);
    jogadorService = new JogadorService(http);
  });

  it('should be defined', () => {
    expect(jogadorService).toBeDefined();
  });

  it('get should have been called', () => {
    http.get.and.callFake(() => Observable.of(
      [{
        nome: 'Rogerio Ceni',
        idade: '44',
        clube: '1'
      }]
    ));
    const jogadores = jogadorService.getJogadores();
    expect(http.get).toHaveBeenCalledTimes(1);
  });

  it('post should have been called', () => {
    http.post.and.callFake(() => Observable.of({}));
    const jogador: Jogador = {
        nome: 'Rogerio Ceni',
        idade: '44',
        clube: '1'
      };
    jogadorService.postJogador(jogador);
    expect(http.post).toHaveBeenCalledTimes(1);
  });

  it('patch should have been called', () => {
    http.patch.and.callFake(() => Observable.of({}));
    const jogador: Jogador = {
        nome: 'Rogerio Ceni',
        idade: '44',
        clube: '1'
      };
    jogadorService.pathJogador(jogador);
    expect(http.patch).toHaveBeenCalledTimes(1);
  });
  
  it('delete should have been called', () => {
    http.delete.and.callFake(() => Observable.of({}));
    const jogador: Jogador = {
        nome: 'Rogerio Ceni',
        idade: '44',
        clube: '1'
      };
    jogadorService.deleteJogador(jogador);
    expect(http.delete).toHaveBeenCalledTimes(1);
  });
});
