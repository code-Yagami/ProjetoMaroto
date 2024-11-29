import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleritesComponent } from './holerites.component';

describe('HoleritesComponent', () => {
  let component: HoleritesComponent;
  let fixture: ComponentFixture<HoleritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoleritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoleritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
