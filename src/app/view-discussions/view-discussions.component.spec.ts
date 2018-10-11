import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiscussionsComponent } from './view-discussions.component';

describe('ViewDiscussionsComponent', () => {
  let component: ViewDiscussionsComponent;
  let fixture: ComponentFixture<ViewDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
