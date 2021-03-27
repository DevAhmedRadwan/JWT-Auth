import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';

// angular animation modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SignUpDialogComponent,
    SignInDialogComponent,
  ],
  exports: [
    SignUpDialogComponent,
    SignInDialogComponent,
  ],
  imports: [
    // angular modules
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    // angular animation modules
    BrowserAnimationsModule,
    // angular material modules
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class DialogModule { }
