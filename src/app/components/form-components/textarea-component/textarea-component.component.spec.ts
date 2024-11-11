import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponentComponent } from './textarea-component.component';

describe('TextareaComponentComponent', () => {
  let component: TextareaComponentComponent;
  let fixture: ComponentFixture<TextareaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextareaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
