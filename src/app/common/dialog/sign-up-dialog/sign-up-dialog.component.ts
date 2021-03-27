import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  form:FormGroup;

  constructor(public dialogRef: MatDialogRef<SignUpDialogComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "email":new FormControl('',Validators.required),
      "username":new FormControl('',Validators.required),
      "password":new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    this.dialogRef.close(this.form.value);
  }

}
