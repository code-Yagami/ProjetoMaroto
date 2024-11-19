import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveTableComponentComponent } from './interactive-table-component.component';

describe('InteractiveTableComponentComponent', () => {
  let component: InteractiveTableComponentComponent;
  let fixture: ComponentFixture<InteractiveTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveTableComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractiveTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
