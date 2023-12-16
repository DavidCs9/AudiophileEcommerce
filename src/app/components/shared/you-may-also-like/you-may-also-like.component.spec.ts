import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMayAlsoLikeComponent } from './you-may-also-like.component';

describe('YouMayAlsoLikeComponent', () => {
  let component: YouMayAlsoLikeComponent;
  let fixture: ComponentFixture<YouMayAlsoLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouMayAlsoLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouMayAlsoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
