import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptPracticeComponent } from './concept-practice.component';

describe('ConceptPracticeComponent', () => {
  let component: ConceptPracticeComponent;
  let fixture: ComponentFixture<ConceptPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
