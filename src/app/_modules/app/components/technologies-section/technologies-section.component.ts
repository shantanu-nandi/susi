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
      items: ['HTMl5, CSS3, Javascript(ES6), Typescript, JQuery, Ajax', 'Angular, React', 'XML, JSON', 'Bootstrap 4, SASS, Font Awesome, SVG']
    },
    {
      title: 'Backend Technologies',
      items: ['C#, .NET, .NET Core, Entity Framework', 'Java', 'Python', 'Node.JS, Express']
    },
    {
      title: 'Database Technologies',
      items: ['SQL (MS SQL, MySQL)', 'NoSQL(MongoDB)']
    },
    {
      title: 'Cloud Technologies',
      items: ['Azure', 'AWS', 'GCP']
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
      items: ['VS Code, Visual Studio', 'Eclipse', 'Linting', 'Beautify']
    }
  ];
}
