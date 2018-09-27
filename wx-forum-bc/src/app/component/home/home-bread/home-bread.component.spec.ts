import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBreadComponent } from './home-bread.component';

describe('HomeBreadComponent', () => {
  let component: HomeBreadComponent;
  let fixture: ComponentFixture<HomeBreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
