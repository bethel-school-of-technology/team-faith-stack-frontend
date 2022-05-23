import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistListallComponent } from './listall.component';

describe('ListallComponent', () => {
  let component: TherapistListallComponent;
  let fixture: ComponentFixture<TherapistListallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistListallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
