import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APerformanceComponent } from './a-performance.component';

describe('APerformanceComponent', () => {
  let component: APerformanceComponent;
  let fixture: ComponentFixture<APerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
