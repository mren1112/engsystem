
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle, } from '@angular/material/dialog';

  exports: [
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,

  ]

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  // styleUrls: ['./confirm-dialog.component.css']
})
export class PublicDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PublicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
   // this.title = data.title;
   // this.message = data.message;
  }

  ngOnInit() {}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
