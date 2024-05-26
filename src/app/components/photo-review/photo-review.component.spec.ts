import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoReviewComponent } from './photo-review.component';

describe('PhotoReviewComponent', () => {
  let component: PhotoReviewComponent;
  let fixture: ComponentFixture<PhotoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
