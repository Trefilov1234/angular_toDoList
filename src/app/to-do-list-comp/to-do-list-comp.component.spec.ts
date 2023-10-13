import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListCompComponent } from './to-do-list-comp.component';

describe('ToDoListCompComponent', () => {
  let component: ToDoListCompComponent;
  let fixture: ComponentFixture<ToDoListCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListCompComponent]
    });
    fixture = TestBed.createComponent(ToDoListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
