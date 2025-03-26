import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositBankTransferComponent } from './deposit-bank-transfer.component';

describe('DepositBankTransferComponent', () => {
  let component: DepositBankTransferComponent;
  let fixture: ComponentFixture<DepositBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositBankTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
