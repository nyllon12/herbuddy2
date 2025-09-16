// @@ .. @@
// import { WelcomeComponent } from './app/components/welcome/welcome.component';

// import { AuthWelcomeComponent } from './app/components/auth/welcome/welcome.component';
// import { AuthWelcomeComponent } from './app/components/auth/welcome/welcome.component';
// import { SignupComponent } from './app/components/auth/signup/signup.component';
// import { LoginComponent } from './app/components/auth/login/login.component';
// import { GirlDashboardComponent } from './app/components/dashboard/girl-dashboard/girl-dashboard.component';
// import { GuardianDashboardComponent } from './app/components/dashboard/guardian-dashboard/guardian-dashboard.component';
// import { SignupComponent } from './app/components/auth/signup/signup.component';
// import { LoginComponent } from './app/components/auth/login/login.component';
// import { GirlDashboardComponent } from './app/components/dashboard/girl-dashboard/girl-dashboard.component';
// import { GuardianDashboardComponent } from './app/components/dashboard/guardian-dashboard/guardian-dashboard.component';

// @@ .. @@
//    { path: 'contact', component: ContactComponent },
//    { path: 'welcome', component: WelcomeComponent },
//   { path: 'auth/welcome', component: AuthWelcomeComponent },
//   { path: 'auth/signup', component: SignupComponent },
//   { path: 'auth/login', component: LoginComponent },
//   { path: 'dashboard/girl', component: GirlDashboardComponent },
//   { path: 'dashboard/guardian', component: GuardianDashboardComponent },
//   { path: 'auth/welcome', component: AuthWelcomeComponent },
//   { path: 'auth/signup', component: SignupComponent },
//   { path: 'auth/login', component: LoginComponent },
//   { path: 'dashboard/girl', component: GirlDashboardComponent },
//   { path: 'dashboard/guardian', component: GuardianDashboardComponent },
//    { path: '**', redirectTo: '' }



import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { WelcomeComponent } from './app/components/welcome/welcome.component';

import { AuthWelcomeComponent } from './app/components/auth/welcome/welcome.component';
import { SignupComponent } from './app/components/auth/signup/signup.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { GirlDashboardComponent } from './app/components/dashboard/girl-dashboard/girl-dashboard.component';
import { GuardianDashboardComponent } from './app/components/dashboard/guardian-dashboard/guardian-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'welcome', component: WelcomeComponent },

  { path: 'auth/welcome', component: AuthWelcomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },

  { path: 'dashboard/girl', component: GirlDashboardComponent },
  { path: 'dashboard/guardian', component: GuardianDashboardComponent },

  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
