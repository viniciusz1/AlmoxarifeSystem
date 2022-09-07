import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesTableComponent } from './devolucoes-table.component';

describe('DevolucoesTableComponent', () => {
  let component: DevolucoesTableComponent;
  let fixture: ComponentFixture<DevolucoesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucoesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucoesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
