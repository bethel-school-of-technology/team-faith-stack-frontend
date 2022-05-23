import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: TherapistEditComponent;
  let fixture: ComponentFixture<TherapistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
