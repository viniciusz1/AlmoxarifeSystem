import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarTelComponent } from './verificar-tel.component';

describe('VerificarTelComponent', () => {
  let component: VerificarTelComponent;
  let fixture: ComponentFixture<VerificarTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
