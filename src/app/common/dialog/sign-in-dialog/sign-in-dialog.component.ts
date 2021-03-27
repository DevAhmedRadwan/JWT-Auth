import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

  form:FormGroup;

  constructor(public dialogRef: MatDialogRef<SignInDialogComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "userIdentifier":new FormControl('',Validators.required),
      "password":new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    this.dialogRef.close(this.form.value);
  }

}
