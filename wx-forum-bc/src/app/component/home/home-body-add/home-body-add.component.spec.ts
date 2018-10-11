import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyAddComponent } from './home-body-add.component';

describe('HomeBodyAddComponent', () => {
  let component: HomeBodyAddComponent;
  let fixture: ComponentFixture<HomeBodyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
