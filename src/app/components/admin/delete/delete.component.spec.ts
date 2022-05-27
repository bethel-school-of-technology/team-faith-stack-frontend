import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: AdminDeleteComponent;
  let fixture: ComponentFixture<AdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
