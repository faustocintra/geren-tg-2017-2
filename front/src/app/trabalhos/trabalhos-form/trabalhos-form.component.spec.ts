import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosFormComponent } from './trabalhos-form.component';

describe('TrabalhosFormComponent', () => {
  let component: TrabalhosFormComponent;
  let fixture: ComponentFixture<TrabalhosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
