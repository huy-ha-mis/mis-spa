import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-spinner-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './spinner-dialog.component.html',
  styleUrl: './spinner-dialog.component.scss',
})
export class SpinnerDialogComponent {
  constructor(public dialogRef: MatDialogRef<SpinnerDialogComponent>) {}
}
