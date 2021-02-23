import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentsComponent } from './investments/investments.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoansComponent } from './loans/loans.component';
import { MembersComponent } from './members/members.component';
import { EmailsComponent } from './messaging/emails/emails.component';
import { MessagingComponent } from './messaging/messaging.component';
import { NotificationsComponent } from './messaging/notifications/notifications.component';
import { SmsComponent } from './messaging/sms/sms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ContributionsComponent } from './wallets/contributions/contributions.component';
import { DepositsComponent } from './wallets/deposits/deposits.component';
import { TransfersComponent } from './wallets/transfers/transfers.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WithdrawalsComponent } from './wallets/withdrawals/withdrawals.component';

const routes: Routes = [
  { path: 'wallet', component: WalletsComponent},
  { path: '', component: LandingPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'messaging/emails', component: EmailsComponent },
  { path: 'messaging/sms', component: SmsComponent},
  { path: 'messaging/notifications', component: NotificationsComponent },
  { path: 'wallet/deposits', component: DepositsComponent },
  { path: 'wallet/withdrawals', component: WithdrawalsComponent },
  { path: 'wallet/contributions', component: ContributionsComponent },
  { path: 'wallet/transfers', component: TransfersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }
  // { path: }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
