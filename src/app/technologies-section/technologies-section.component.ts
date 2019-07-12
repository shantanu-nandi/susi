import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss']
})
export class TechnologiesSectionComponent {
  technologies = [{
      title: 'Frontent Technologies',
      items: ['HTMl5, CSS3, Javascript(ES6), Typescript, JQuery, Ajax', 'Angular, React', 'Bootstrap4, SASS, Font Awesome, SVG']
    },
    {
      title: 'Backend Technologies',
      items: ['C#, ASP.NET MVC, ASP.NET Web API', 'Entity Framework', 'Node.JS, Express']
    },
    {
      title: 'Database Technologies',
      items: ['SQL (MS SQL)', 'NoSQL(MongoDB)']
    },
    {
      title: 'Cloud Technologies',
      items: ['Azure', 'AWS']
    },
    {
      title: 'Automated Testing',
      items: ['Unit Testing, Mock, TDD, BDD', 'Integration Testing', 'E2E Testing (Selenium, Protactor)']
    },
    {
      title: 'Version Control Systems',
      items: ['TFS', 'GIT']
    },
    {
      title: 'Tooling',
      items: ['VS Code, Visual Studio', 'Linting', 'Beautify']
    }
  ];
}
