import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsNumForImgComponent } from './inputs-num-for-img.component';

describe('InputsNumForImgComponent', () => {
  let component: InputsNumForImgComponent;
  let fixture: ComponentFixture<InputsNumForImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsNumForImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsNumForImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
