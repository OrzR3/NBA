import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOperationComponent } from './match-operation.component';

describe('MatchOperationComponent', () => {
  let component: MatchOperationComponent;
  let fixture: ComponentFixture<MatchOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
