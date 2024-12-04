import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCargosPretendidosComponent } from './editar-cargos-pretendidos.component';

describe('EditarCargosPretendidosComponent', () => {
  let component: EditarCargosPretendidosComponent;
  let fixture: ComponentFixture<EditarCargosPretendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCargosPretendidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCargosPretendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
