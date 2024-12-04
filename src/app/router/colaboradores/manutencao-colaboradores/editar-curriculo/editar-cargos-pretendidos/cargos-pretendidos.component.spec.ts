import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosPretendidosComponent } from './cargos-pretendidos.component';

describe('EditarCargosPretendidosComponent', () => {
  let component: CargosPretendidosComponent;
  let fixture: ComponentFixture<CargosPretendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargosPretendidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargosPretendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
