import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdeaComponent } from './list-idea.component';

describe('ListIdeaComponent', () => {
  let component: ListIdeaComponent;
  let fixture: ComponentFixture<ListIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListIdeaComponent]
    });
    fixture = TestBed.createComponent(ListIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
