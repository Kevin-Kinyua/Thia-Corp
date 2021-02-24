import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletsComponent } from './wallets/wallets.component';
import { DepositsComponent } from './wallets/deposits/deposits.component';
import { WithdrawalsComponent } from './wallets/withdrawals/withdrawals.component';
import { MessagingComponent } from './messaging/messaging.component';
import { EmailsComponent } from './messaging/emails/emails.component';
import { SmsComponent } from './messaging/sms/sms.component';
import { NotificationsComponent } from './messaging/notifications/notifications.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ContributionsComponent } from './wallets/contributions/contributions.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { TransfersComponent } from './wallets/transfers/transfers.component';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './members/members.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomersComponent } from './landing-page/customers/customers.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavListComponent } from './dashboard/navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './dashboard/navigation/navtabs/navtabs.component';
import { UsersComponent } from './users/users.component';
import { ProfileHeaderComponent } from './dashboard/navigation/profile-header/profile-header.component';
import { ProfileFooterComponent } from './dashboard/navigation/profile-footer/profile-footer.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MyAccountComponent } from './wallets/my-account/my-account.component';
import { SecurityComponent } from './auth/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LandingPageComponent,
    DashboardComponent,
    WalletsComponent,
    DepositsComponent,
    WithdrawalsComponent,
    MessagingComponent,
    EmailsComponent,
    SmsComponent,
    NotificationsComponent,
    LoansComponent,
    InvestmentsComponent,
    ContributionsComponent,
    SettingsComponent,
    ReportsComponent,
    TransfersComponent,
    HeaderComponent,
    MembersComponent,
    PagenotfoundComponent,
    CustomersComponent,
    FeaturesComponent,
    CarouselComponent,
    AboutUsComponent,
    FooterComponent,
    SidenavListComponent,
    NavtabsComponent,
    UsersComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileComponent,
    MyAccountComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
