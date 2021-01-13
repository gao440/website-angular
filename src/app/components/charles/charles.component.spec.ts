import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlesComponent } from './charles.component';

describe('CharlesComponent', () => {
  let component: CharlesComponent;
  let fixture: ComponentFixture<CharlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
