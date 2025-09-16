@@ .. @@
import { WelcomeComponent } from './app/components/welcome/welcome.component';

import { AuthWelcomeComponent } from './app/components/auth/welcome/welcome.component';
import { SignupComponent } from './app/components/auth/signup/signup.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { GirlDashboardComponent } from './app/components/dashboard/girl-dashboard/girl-dashboard.component';
import { GuardianDashboardComponent } from './app/components/dashboard/guardian-dashboard/guardian-dashboard.component';
import { AuthWelcomeComponent } from './app/components/auth/welcome/welcome.component';
import { SignupComponent } from './app/components/auth/signup/signup.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { GirlDashboardComponent } from './app/components/dashboard/girl-dashboard/girl-dashboard.component';
import { GuardianDashboardComponent } from './app/components/dashboard/guardian-dashboard/guardian-dashboard.component';

@@ .. @@
   { path: 'contact', component: ContactComponent },
   { path: 'welcome', component: WelcomeComponent },
 { path: 'auth/welcome', component: AuthWelcomeComponent },
 { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard/girl', component: GirlDashboardComponent },
  { path: 'dashboard/guardian', component: GuardianDashboardComponent },
  { path: 'auth/welcome', component: AuthWelcomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard/girl', component: GirlDashboardComponent },
  { path: 'dashboard/guardian', component: GuardianDashboardComponent },
   { path: '**', redirectTo: '' }