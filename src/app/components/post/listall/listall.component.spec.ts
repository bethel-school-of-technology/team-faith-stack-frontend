import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListallComponent } from './listall.component';

describe('ListallComponent', () => {
  let component: PostListallComponent;
  let fixture: ComponentFixture<PostListallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
