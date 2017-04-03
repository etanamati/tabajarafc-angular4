import { TestBed, inject } from '@angular/core/testing';

import { ClubeService } from './clube.service';
import { Observable } from "rxjs/Rx";
import { Clube } from "app/modules/clube/clube";

fdescribe('ClubeService', () => {
  let http: any;
  let clubeService: ClubeService;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'post', 'patch', 'delete']);
    clubeService = new ClubeService(http);
  });

  fit('should be defined', () => {
    expect(clubeService).toBeDefined();
  });

  fit('get should have been called', () => {
    http.get.and.callFake(() => Observable.of(
      [{
        codigo: '1',
        nome: 'São Paulo',
        presidente: 'Leco'
      }]
    ));
    const clubes = clubeService.getClubes();
    expect(http.get).toHaveBeenCalledTimes(1);
  });

  fit('post should have been called', () => {
    http.post.and.callFake(() => Observable.of({}));
    const clube: Clube = {
        nome: 'São Paulo',
        presidente: 'Leco'
      };
    clubeService.postClube(clube);
    expect(http.post).toHaveBeenCalledTimes(1);
  });

  fit('patch should have been called', () => {
    http.patch.and.callFake(() => Observable.of({}));
    const clube: Clube = {
        nome: 'São Paulo',
        presidente: 'Leco'
      };
    clubeService.pathClube(clube);
    expect(http.patch).toHaveBeenCalledTimes(1);
  });
  
  fit('delete should have been called', () => {
    http.delete.and.callFake(() => Observable.of({}));
    const clube: Clube = {
        nome: 'São Paulo',
        presidente: 'Leco'
      };
    clubeService.deleteClube(clube);
    expect(http.delete).toHaveBeenCalledTimes(1);
  });
});
