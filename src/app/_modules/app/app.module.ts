import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { CardComponent } from './components/card/card.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { AppErrorHandler } from 'src/app/_services/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    CardsComponent,
    CardsSectionComponent,
    CardComponent,
    TechnologyComponent,
    TechnologiesSectionComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ComingSoonComponent,
    TimerComponent,
    TimelineComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
