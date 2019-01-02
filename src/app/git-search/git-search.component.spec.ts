import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchComponent } from './git-search.component';

describe('GitSearchComponent', () => {
  let component: GitSearchComponent;
  let fixture: ComponentFixture<GitSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
