import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnboardingComponent,
    LoginComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    RouterModule,
    IonicModule,
    FormsModule
  ]
})
export class OnboardingModule { }
