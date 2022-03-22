import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { HomePageComponent } from './componants/home-page/home-page.component';
import { PersonalPageComponent } from './componants/personal-page/personal-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './componants/signup/signup.component';
import { HelpMainComponent } from './componants/help-main/help-main.component';
import { CallingComponent } from './componants/calling/calling.component';
import { CallingAllComponent } from './componants/calling-all/calling-all.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './componants/login/login.component';
import { ApplingForAjobComponent } from './componants/appling-for-ajob/appling-for-ajob.component';
import { OfferingAjobComponent } from './componants/offering-ajob/offering-ajob.component';
import { MyApplicationComponent } from './componants/my-application/my-application.component';
import { ApplicantListComponent } from './componants/applicant-list/applicant-list.component';
import { JobsListComponent } from './componants/jobs-list/jobs-list.component';
import { MyFoundProviderComponent } from './componants/my-found-provider/my-found-provider.component';
import { ThingsToBeDoneAskingComponent } from './componants/things-to-be-done-asking/things-to-be-done-asking.component';
import { ThingsToBeDoneOfferingComponent } from './componants/things-to-be-done-offering/things-to-be-done-offering.component';
import { MyThingsToBeDoneComponent } from './componants/my-things-to-be-done/my-things-to-be-done.component';
import { ApplicantForThingsToBeDoneComponent } from './componants/applicant-for-things-to-be-done/applicant-for-things-to-be-done.component';
import { MyApplicationsForThingsToBeDoneComponent } from './componants/my-applications-for-things-to-be-done/my-applications-for-things-to-be-done.component';
import { MyOffersForThingsToBeDoneComponent } from './componants/my-offers-for-things-to-be-done/my-offers-for-things-to-be-done.component';
import { FinancialHelpAskingComponent } from './componants/financial-help-asking/financial-help-asking.component';
import { FinancialHelpGivingComponent } from './componants/financial-help-giving/financial-help-giving.component';
import { MyfinancialHelpComponent } from './componants/myfinancial-help/myfinancial-help.component';
import { ApplicantForFinancialHelpComponent } from './componants/applicant-for-financial-help/applicant-for-financial-help.component';
import { MyApplicationsForFinancialHelpComponent } from './componants/my-applications-for-financial-help/my-applications-for-financial-help.component';
import { MyLostComponent } from './componants/my-lost/my-lost.component';

/**/
// http://localhost:4200/
const routes: Routes = [
  {path:'login',component:LoginComponent},//*
  {path:'signup',component:SignupComponent},//*
  {path: 'main',component:HelpMainComponent},
  {path: 'home',component:HomePageComponent},
  {path: 'profile',component:PersonalPageComponent}, //  Authentication get user info
  {path: 'all-Lost',component:CallingComponent},//*
  {path: 'my-found',component:MyFoundProviderComponent},//*
  {path: 'calling',component:CallingAllComponent},//*
  {path: 'app-list/:id',component:ApplicantListComponent},// helper    get provide jop applyers      **
  {path: 'my-lost',component:MyLostComponent},// helper    get provide jop applyers      **
  {path: 'app-job',component:ApplingForAjobComponent},//* needer    create need jop post      get provide jobs
  {path: 'job-list',component:JobsListComponent},    //  helper    get all my provide jobs    **
  {path: 'my-app',component:MyApplicationComponent}, //  needer     get my need job           **
  {path: 'offer-job',component:OfferingAjobComponent},// helper      create provide jop post     get need jobs
  {path: 'ask-thing-to-be-done',component:ThingsToBeDoneAskingComponent},// true
  {path: 'offer-thing-to-be-done',component:ThingsToBeDoneOfferingComponent},
  {path: 'my-thing-to-be-done',component:MyThingsToBeDoneComponent},
  {path: 'app-for-thing-to-be-done/:id',component:ApplicantForThingsToBeDoneComponent},
  {path: 'my-app-for-thing-to-be-done',component:MyApplicationsForThingsToBeDoneComponent},
  {path: 'my-offer-for-thing-to-be-done/:id',component:MyOffersForThingsToBeDoneComponent},
  {path: 'financialHelpAsking',component:FinancialHelpAskingComponent},//financialHelpAsking  financialHelpGiving myfinancialHelp
  {path: 'financialHelpGiving',component:FinancialHelpGivingComponent},//myApplicantForFinancialHelp
  {path: 'myfinancialHelp',component:MyfinancialHelpComponent},
  {path: 'applicantForFinancialHelp/:id',component:ApplicantForFinancialHelpComponent},
  {path: 'myApplicantForFinancialHelp',component:MyApplicationsForFinancialHelpComponent},
  {path: '', redirectTo: '/main',pathMatch: 'full'},
  // if user enter any thing without all routes
  {path: '**', redirectTo: '/main',pathMatch: 'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    PersonalPageComponent,
    SignupComponent,
    HelpMainComponent,
    CallingComponent,
    CallingAllComponent,
    LoginComponent,
    ApplingForAjobComponent,
    OfferingAjobComponent,
    MyApplicationComponent,
    ApplicantListComponent,
    JobsListComponent,
    MyFoundProviderComponent,
    ThingsToBeDoneAskingComponent,
    ThingsToBeDoneOfferingComponent,
    MyThingsToBeDoneComponent,
    ApplicantForThingsToBeDoneComponent,
    MyApplicationsForThingsToBeDoneComponent,
    MyOffersForThingsToBeDoneComponent,
    FinancialHelpAskingComponent,
    FinancialHelpGivingComponent,
    MyfinancialHelpComponent,
    ApplicantForFinancialHelpComponent,
    MyApplicationsForFinancialHelpComponent,
    MyLostComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
