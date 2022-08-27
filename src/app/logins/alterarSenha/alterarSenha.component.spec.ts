import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alterarSenhaComponent } from './alterarSenha.component';

describe('alterarSenhaComponent', () => {
  let component: alterarSenhaComponent;
  let fixture: ComponentFixture<alterarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ alterarSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(alterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
