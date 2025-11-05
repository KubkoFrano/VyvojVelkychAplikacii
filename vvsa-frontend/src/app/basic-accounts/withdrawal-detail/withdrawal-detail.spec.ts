import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalDetail } from './withdrawal-detail';

describe('WithdrawalDetail', () => {
  let component: WithdrawalDetail;
  let fixture: ComponentFixture<WithdrawalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawalDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
