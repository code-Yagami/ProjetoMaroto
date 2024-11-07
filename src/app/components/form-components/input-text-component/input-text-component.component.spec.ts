import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponentComponent } from './input-text-component.component';

describe('InputTextComponentComponent', () => {
  let component: InputTextComponentComponent;
  let fixture: ComponentFixture<InputTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
