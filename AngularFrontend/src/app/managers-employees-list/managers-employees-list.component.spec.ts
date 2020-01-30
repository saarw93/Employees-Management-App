import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersEmployeesListComponent } from './managers-employees-list.component';

describe('ManagersEmployeesListComponent', () => {
  let component: ManagersEmployeesListComponent;
  let fixture: ComponentFixture<ManagersEmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersEmployeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
