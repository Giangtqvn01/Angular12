import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFrommComponent } from './reactive-fromm.component';

describe('ReactiveFrommComponent', () => {
  let component: ReactiveFrommComponent;
  let fixture: ComponentFixture<ReactiveFrommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFrommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFrommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
