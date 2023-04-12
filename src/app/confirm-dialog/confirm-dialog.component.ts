import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  public title = 'Are you sure ?';
  public message = 'Do you really want to remove this item?';
  public confirmbutton = 'confirm';
  public closebutton = 'cancel';

  constructor(public dialogRef:MatDialogRef<ConfirmDialogComponent>){
    
  }
}
