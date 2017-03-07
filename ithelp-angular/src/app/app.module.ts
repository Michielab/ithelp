import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneService } from './phone.service';
import { UserService } from './user.service';
import { SessionService } from './session.service';
import { FileSelectDirective } from "ng2-file-upload";
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FilterPipe } from './pipes/filter-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    FileSelectDirective,
    AddPhoneComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    InboxComponent,
    SearchResultsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService, UserService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
