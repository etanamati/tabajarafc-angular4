import { AppRoutingModule } from './../../app.routing';
import { HttpModule } from '@angular/http';
import { ClubeModule } from './clube.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeComponent } from './clube.component'
import { APP_BASE_HREF } from '@angular/common';

fdescribe('TimeComponent', () => {
  let component: ClubeComponent;
  let fixture: ComponentFixture<ClubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClubeModule, HttpModule, AppRoutingModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
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
});
