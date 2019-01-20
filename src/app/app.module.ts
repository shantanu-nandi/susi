import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStrikethrough, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faGitSquare, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardsComponent } from './cards/cards.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    CardsComponent,
    CardsSectionComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faStrikethrough);
    library.add(faBars);
    library.add(faTwitter);
    library.add(faFacebook);
    library.add(faLinkedin);
    library.add(faGithub);
  }
}
