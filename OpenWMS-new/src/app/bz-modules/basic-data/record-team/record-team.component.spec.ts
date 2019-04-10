import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTeamComponent } from './record-team.component';

describe('RecordTeamComponent', () => {
  let component: RecordTeamComponent;
  let fixture: ComponentFixture<RecordTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
