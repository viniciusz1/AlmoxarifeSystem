import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHistoricoComponent } from './filtro-historico.component';

describe('FiltroHistoricoComponent', () => {
  let component: FiltroHistoricoComponent;
  let fixture: ComponentFixture<FiltroHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
