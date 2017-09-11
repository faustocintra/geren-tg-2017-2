import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoListaComponent } from './trabalho-lista.component';

describe('TrabalhoListaComponent', () => {
  let component: TrabalhoListaComponent;
  let fixture: ComponentFixture<TrabalhoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
