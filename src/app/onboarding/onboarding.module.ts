import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';


@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    RouterModule
  ]
})
export class OnboardingModule { }
