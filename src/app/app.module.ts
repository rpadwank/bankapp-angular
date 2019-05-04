import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
   AccountModule,
   FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
