import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDelcarationPollutionRecap } from './form-delcaration-pollution-recap';

describe('FormDelcarationPollutionRecap', () => {
  let component: FormDelcarationPollutionRecap;
  let fixture: ComponentFixture<FormDelcarationPollutionRecap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDelcarationPollutionRecap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDelcarationPollutionRecap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
