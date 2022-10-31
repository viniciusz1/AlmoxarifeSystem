import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocalizacaoComponent } from './modal-localizacao.component';

describe('ModalLocalizacaoComponent', () => {
  let component: ModalLocalizacaoComponent;
  let fixture: ComponentFixture<ModalLocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLocalizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
