import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFilterComponent } from './a-filter.component';

describe('AFilterComponent', () => {
  let component: AFilterComponent;
  let fixture: ComponentFixture<AFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
