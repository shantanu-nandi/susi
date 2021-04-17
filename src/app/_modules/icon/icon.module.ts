import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faCalendarWeek, faClock, faStopwatch, faCalculator, 
  faTable, faStrikethrough, faBars, faCheck, faEnvelope, faMobileAlt, 
  faGreaterThan, faLessThan, faPlusCircle, faArrowCircleRight, faPalette,
  faSearch, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FontAwesomeModule]
})
export class IconModule { 
  constructor() {
    this.addToLibrary();
  }

  private addToLibrary() {
    const icons = [faUserCircle, faCalendarWeek, faClock, faStopwatch,
      faCalculator, faTable, faStrikethrough, faCheck, faBars, faEnvelope,
      faTwitter, faFacebook, faLinkedin, faGithub, faGoogle, faMobileAlt, faGreaterThan,
      faLessThan, faPlusCircle, faArrowCircleRight, faPalette, faSearch, 
      faPlus, faBell];
    
    for(const icon of icons)
      library.add(icon);
  }
}
