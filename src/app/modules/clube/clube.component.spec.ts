import { ClubeService } from './clube.service';
import { AppRoutingModule } from './../../app.routing';
import { HttpModule } from '@angular/http';
import { ClubeModule } from './clube.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeComponent } from './clube.component'
import { APP_BASE_HREF } from '@angular/common';
import { Clube } from './clube'

fdescribe('ClubeComponent', () => {
  let component: ClubeComponent;
  let fixture: ComponentFixture<ClubeComponent>;
  let clubeService: any;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ClubeModule, HttpModule, AppRoutingModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ClubeService, useValue: clubeService }
      ]
    });
    
    TestBed.compileComponents().then(()=> {
      fixture = TestBed.createComponent(ClubeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should have clube value', () => {
    const clube: Clube = { nome: 'São Paulo', presidente: 'Leco'};
   
    component.clube = clube;

    fixture.detectChanges();

    const nome: string = component.clube.nome;
    const presidente: string = component.clube.presidente;
    
    expect(nome).toEqual('São Paulo', 'should be equals "São Paulo"');
    expect(presidente).toEqual('Leco', 'should be equals "Leco"');
  });
});
