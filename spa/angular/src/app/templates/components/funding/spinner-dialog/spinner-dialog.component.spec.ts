import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDialogComponent } from './spinner-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('SpinnerDialogComponent', () => {
  let component: SpinnerDialogComponent;
  let fixture: ComponentFixture<SpinnerDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
    // Add other stubbed methods/properties as needed
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerDialogComponent, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
