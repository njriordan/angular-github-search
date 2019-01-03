import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDisplayComponent } from './code-display.component';

describe('CodeDisplayComponent', () => {
  let component: CodeDisplayComponent;
  let fixture: ComponentFixture<CodeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
