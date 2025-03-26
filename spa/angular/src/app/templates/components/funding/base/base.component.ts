import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerDialogComponent } from '../spinner-dialog/spinner-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Message } from '../interfaces/message';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
})
export class BaseComponent {
  constructor(public dialog: MatDialog) {}

  openSpinnerDialog(): void {
    this.dialog.open(SpinnerDialogComponent, {
      disableClose: true,
    });
  }

  openErrorDialog(message: Message): void {
    this.dialog.open(ErrorDialogComponent, { data: message });
  }

  openSuccessDialog(message: Message): void {
    this.dialog.open(SuccessDialogComponent, { data: message });
  }

  closeAllDialog(): void {
    this.dialog.closeAll();
  }

  updateData(data: unknown): void {
    console.log(data);
  }

  updateState(data?: unknown): void {
    console.log(data);
  }
}
