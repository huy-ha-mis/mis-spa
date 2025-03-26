import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositComponent } from './deposit.component';

describe('Deposit', () => {
  let component: Deposit;
  let fixture: ComponentFixture<Deposit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deposit],
    }).compileComponents();

    fixture = TestBed.createComponent(Deposit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
