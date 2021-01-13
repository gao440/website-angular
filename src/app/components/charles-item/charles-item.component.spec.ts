import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlesItemComponent } from './charles-item.component';

describe('CharlesItemComponent', () => {
  let component: CharlesItemComponent;
  let fixture: ComponentFixture<CharlesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharlesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
