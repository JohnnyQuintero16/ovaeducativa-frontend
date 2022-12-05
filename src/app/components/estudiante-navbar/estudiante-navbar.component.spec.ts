import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteNavbarComponent } from './estudiante-navbar.component';

describe('EstudianteNavbarComponent', () => {
  let component: EstudianteNavbarComponent;
  let fixture: ComponentFixture<EstudianteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
