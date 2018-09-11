import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAdComponent } from './university-ad.component';

describe('UniversityAdComponent', () => {
  let component: UniversityAdComponent;
  let fixture: ComponentFixture<UniversityAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
