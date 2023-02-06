import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreatComponent } from './formcreat.component';

describe('FormcreatComponent', () => {
  let component: FormcreatComponent;
  let fixture: ComponentFixture<FormcreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
