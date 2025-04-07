import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriditemComponent } from './griditem.component';

describe('GriditemComponent', () => {
  let component: GriditemComponent;
  let fixture: ComponentFixture<GriditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GriditemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GriditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
