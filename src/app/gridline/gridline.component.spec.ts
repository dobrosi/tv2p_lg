import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlineComponent } from './gridline.component';

describe('GridlineComponent', () => {
  let component: GridlineComponent;
  let fixture: ComponentFixture<GridlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
