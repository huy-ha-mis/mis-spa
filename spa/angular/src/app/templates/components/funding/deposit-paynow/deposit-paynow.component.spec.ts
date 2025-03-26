import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPaynowComponent } from './deposit-paynow.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('DepositPaynowComponent', () => {
  let component: DepositPaynowComponent;
  let fixture: ComponentFixture<DepositPaynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositPaynowComponent, NoopAnimationsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositPaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
