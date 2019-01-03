import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryDisplayComponent } from './repository-display.component';

describe('RepositoryDisplayComponent', () => {
  let component: RepositoryDisplayComponent;
  let fixture: ComponentFixture<RepositoryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
