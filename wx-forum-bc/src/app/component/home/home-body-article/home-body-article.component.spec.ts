import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyArticleComponent } from './home-body-article.component';

describe('HomeBodyArticleComponent', () => {
  let component: HomeBodyArticleComponent;
  let fixture: ComponentFixture<HomeBodyArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodyArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBodyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
