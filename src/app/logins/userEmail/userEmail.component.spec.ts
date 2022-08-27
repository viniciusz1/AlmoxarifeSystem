import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userEmailComponent } from './userEmail.component';

describe('VerificarTelComponent', () => {
  let component: userEmailComponent;
  let fixture: ComponentFixture<userEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});