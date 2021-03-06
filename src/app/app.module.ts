import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// cmponents
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// modules
import { HomeModule } from './home/home.module';
import { LandingPageModule } from './landing-page/landing-page.module';

// common modules
import { DialogModule } from './common/dialog/dialog.module';

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
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    // common modules
    DialogModule,
    // other modules
    HomeModule,
    LandingPageModule,
    // angular animation modules
    BrowserAnimationsModule,
    // angular material modules
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
