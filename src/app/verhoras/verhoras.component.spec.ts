import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data/data.service';

import { VerhorasComponent } from './verhoras.component';

describe('VerhorasComponent', () => {
  let component: VerhorasComponent;
  let fixture: ComponentFixture<VerhorasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerhorasComponent ],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerhorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
