import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: TherapistCreateComponent;
  let fixture: ComponentFixture<TherapistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
