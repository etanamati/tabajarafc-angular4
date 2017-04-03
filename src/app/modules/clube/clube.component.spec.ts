import { ClubeService } from './clube.service';
import { AppRoutingModule } from './../../app.routing';
import { HttpModule } from '@angular/http';
import { ClubeModule } from './clube.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeComponent } from './clube.component'
import { APP_BASE_HREF } from '@angular/common';
import { Clube } from './clube'
import { clubes } from './clubes.stub'
import { By } from '@angular/platform-browser';
import { Observable } from "rxjs/Rx";

fdescribe('ClubeComponent', () => {
  let component: ClubeComponent;
  let fixture: ComponentFixture<ClubeComponent>;
  let clubeService: any;

  beforeEach(async(() => {

    clubeService = jasmine.createSpyObj('clubeService', ['postClube','getClubes']) 
    clubeService.getClubes.and.callFake(() => Observable.of([clubes]));
    clubeService.postClube.and.callFake(() => Observable.of({}));

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have clube value', () => {
    const clube: Clube = { nome: 'São Paulo', presidente: 'Leco'};
   
    component.clube = clube;

    fixture.detectChanges();

    const nome: string = component.clube.nome;
    const presidente: string = component.clube.presidente;
    
    expect(nome).toEqual('São Paulo', 'should be equals "São Paulo"');
    expect(presidente).toEqual('Leco', 'should be equals "Leco"');
  });
  
  /**
   * 
   it('should save a new clube', (done) => {
    const clube: Clube = { nome: 'São Paulo', presidente: 'Leco' };
    component.clube = clube;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const salvar: HTMLButtonElement = fixture.debugElement.query(By.css('#btnSave')).nativeElement;
      expect(salvar).toBeDefined();
      expect(salvar.disabled).toBeFalsy();

      salvar.click();

      expect(clubeService.postClube).toHaveBeenCalledTimes(1);
      expect(clubeService.getclubes).toHaveBeenCalledTimes(2);
      done();
    });
  });
  */
});
