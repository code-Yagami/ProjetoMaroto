import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFinanceirosComponent } from './dados-financeiros.component';

describe('DadosFinanceirosComponent', () => {
  let component: DadosFinanceirosComponent;
  let fixture: ComponentFixture<DadosFinanceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosFinanceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosFinanceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
