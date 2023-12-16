import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headphones1Component } from './headphones-1.component';

describe('Headphones1Component', () => {
  let component: Headphones1Component;
  let fixture: ComponentFixture<Headphones1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headphones1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Headphones1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
