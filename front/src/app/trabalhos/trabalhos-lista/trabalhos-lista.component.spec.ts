import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosListaComponent } from './trabalhos-lista.component';

describe('TrabalhosListaComponent', () => {
  let component: TrabalhosListaComponent;
  let fixture: ComponentFixture<TrabalhosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
