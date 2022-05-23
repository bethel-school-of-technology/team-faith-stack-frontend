import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistListoneComponent } from './listone.component';

describe('ListoneComponent', () => {
  let component: TherapistListoneComponent;
  let fixture: ComponentFixture<TherapistListoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistListoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistListoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
