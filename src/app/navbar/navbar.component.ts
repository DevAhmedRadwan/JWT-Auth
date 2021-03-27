import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// components
import { SignUpDialogComponent } from '../common/dialog/sign-up-dialog/sign-up-dialog.component';
import { SignInDialogComponent } from '../common/dialog/sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSignInDialog(){
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
