import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTableProfessorComponent } from './pedidos-table-professor.component';

describe('PedidosTableProfessorComponent', () => {
  let component: PedidosTableProfessorComponent;
  let fixture: ComponentFixture<PedidosTableProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosTableProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosTableProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
