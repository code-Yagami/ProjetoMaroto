import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoDespesaComponent } from './novo-despesa.component';

describe('NovoDespesaComponent', () => {
  let component: NovoDespesaComponent;
  let fixture: ComponentFixture<NovoDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoDespesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
