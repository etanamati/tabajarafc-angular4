import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorComponent } from './jogador.component'
import { JogadorModule } from "app/modules/jogador/jogador.module";
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from "app/app.routing";
import { JogadorService } from "app/modules/jogador/jogador.service";
import { APP_BASE_HREF } from "@angular/common";
import { Observable } from 'rxjs/Rx';
import { ClubeService } from "app/modules/clube/clube.service";

describe('JogadorComponent', () => {
  let component: JogadorComponent;
  let fixture: ComponentFixture<JogadorComponent>;
  let jogadorService: any;
  let clubeService: any;

  beforeEach(async(() => {

    clubeService = jasmine.createSpyObj('clubeService', ['getClubes']);
    clubeService.getClubes.and.callFake(() => Observable.of([{ nome: 'São Paulo',presidente: 'Leco' }, {codigo: '1', nome: 'Flamengo',presidente: 'Zico' }]));

    jogadorService = jasmine.createSpyObj('jogadorService', ['getJogadores']);
    jogadorService.getJogadores.and.callFake(() => Observable.of([{nome: 'Rogerio Ceni', idade: '44'}]));

    TestBed.configureTestingModule({
      imports: [JogadorModule, HttpModule, AppRoutingModule],
      providers: [ 
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: JogadorService, useValue: jogadorService },
        { provide: ClubeService, useValue: clubeService }
      ]
    });

    TestBed.compileComponents().then(()=> {
      fixture = TestBed.createComponent(JogadorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
