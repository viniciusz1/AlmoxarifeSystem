import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaHistoricoComponent } from './entrada-historico.component';

describe('EntradaHistoricoComponent', () => {
  let component: EntradaHistoricoComponent;
  let fixture: ComponentFixture<EntradaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
