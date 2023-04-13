import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  form!: FormGroup;
  description!:string;
  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) data: any
    )
  {
      this.description = data.title;
  }

  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []],
      });
  }

  save() {
    console.log(this.form.value)
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
