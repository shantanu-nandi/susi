import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  options = [ 'Angular', 'React.JS', 'Vue', 'Bootstrap'];
}
