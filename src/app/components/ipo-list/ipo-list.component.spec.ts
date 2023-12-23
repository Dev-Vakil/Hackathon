import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoListComponent } from './ipo-list.component';

describe('IpoListComponent', () => {
  let component: IpoListComponent;
  let fixture: ComponentFixture<IpoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpoListComponent]
    });
    fixture = TestBed.createComponent(IpoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
