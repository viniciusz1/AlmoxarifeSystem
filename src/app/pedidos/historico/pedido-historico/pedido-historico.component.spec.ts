import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoHistoricoComponent } from './pedido-historico.component';

describe('PedidoHistoricoComponent', () => {
  let component: PedidoHistoricoComponent;
  let fixture: ComponentFixture<PedidoHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
