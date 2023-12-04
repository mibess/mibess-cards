import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIdeaComponent } from './delete-idea.component';

describe('DeleteIdeaComponent', () => {
  let component: DeleteIdeaComponent;
  let fixture: ComponentFixture<DeleteIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteIdeaComponent]
    });
    fixture = TestBed.createComponent(DeleteIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
