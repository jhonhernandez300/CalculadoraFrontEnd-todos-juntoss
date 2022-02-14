import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRelativeComponent } from './insert-relative.component';

describe('InsertRelativeComponent', () => {
  let component: InsertRelativeComponent;
  let fixture: ComponentFixture<InsertRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRelativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
