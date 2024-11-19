import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoColaboradoresComponent } from './manutencao-colaboradores.component';

describe('ManutencaoColaboradoresComponent', () => {
  let component: ManutencaoColaboradoresComponent;
  let fixture: ComponentFixture<ManutencaoColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoColaboradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencaoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
