import { Component } from '@angular/core';
import { themeColors } from 'src/app/_models/color';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  timelineItems = [
    {
      title: 'Servicenow',
      subtitle: 'Software Engineer',
      duration: 'October 2019 - Present'
    },
    {
      title: 'Microsoft',
      subtitle: 'Associate Consultant',
      duration: 'May 2019 - October 2019',
      activities: [
        'Implemented state machine from scratch for workflow processing(User can pause/resume at any stage)',
        'Developed cloud based application to process image(workflow) using Azure batch service(approximately takes 7-8 hours)',
        'Designed and developed web application written in ASP.NET core 2.O and Angular 5.',
        'Working as Cloud developer on Microsoft Azure, involved in creating and configuring applications on cloud.',
        'Designed, implemented and tested core module written in C# and Angular, taking into account code readability, reliability, testability and performance.',
        'Practice agile development methodologies and work with current cloud technologies'
      ],
      tags: ['C#', '.NET Core', 'TypeScript', 'Angular 5', 'Kendo UI', 'Azure', 'MS SQL', 
        'MongoDB', 'Git', 'xUnit', 'Jasmine', 'Microservice', 'Event Driven', 'Web App', 
        'Cloud', 'Object Oriented Design', 'Algorithm Design', 'Design Pattern', 'Agile'
      ]
    },
    {
      title: 'Optum Global Solution India Private Limited',
      subtitle: 'Software Engineer',
      duration: 'March 2018 - May 2019',
      activities: [
        'Adopted agile development strategies like scrum and kanban that successfully allowed progressive user-valuable products.',
        'Developed and maintained web application written in ASP.NET Web API ans Angular 5.',
        'Designed, implemented and tested core module written in C#, taking into account code readability, re-usability, testability and performance.',
        'Designed and developed reusable user interface component using Angular 5 and Bootstrap 4.',
        'Implemented Role Based Access Control System(RBAC) from scratch.',
        'Implemented key infrastructure as logging, metrics and failure in ASP.NET MVC application.',
        'Experimented and adopted new technologies like ES7, TypeScript, SCSS'
      ],
      tags: ['C#', 'ASP.NET MVC', 'ASP.NET Web API', 'JQuery', 'Javascript', 'TypeScript', 'Angular 5', 
        'Bootstrap 4', 'UI Toolkit', 'NPM', 'SCSS', 'Azure', 'MS SQL', 'Redis', 'TFS', 'NUnit', 'Jasmine',
        'Web App', 'Object Orinted Design', 'API Development', 'User Interface Design', 'Agile'
      ]
    },
    {
      title: 'Tata Consultancy Services',
      subtitle: 'System Engineer',
      duration: 'July 2015 - March 2018',
      activities: [
        'Designed database schema for task management system.',
        'Created GUI of the application using Java.',
        'Developed task processing system, notification management system from scratch.',
        'Developed form based authentication and authorization of the app from scratch.',
        'Automated time consuming repeated tasks using Python.',
        'Developed automated test cases using Selenium.',
        'Automated over 250 test cases and reduced manual effort by 70%.',
        'Modified existing legacy code to fix errors, improve performance and adapt to new requirements.'
      ],
      tags: ['Node.JS', 'Express', 'NPM', 'Javascript', 'Java', 'MySQL', 'JUnit', 
        'Software Development', 'Waterfall Model', 'Scripting', 'Python', 'Selenium', 
        'TFS', 'Automated Testing', 'E2E Testing', 'MS SQL', 'Page Object Model'
      ]
    }
  ];

  getBadgeName(index: number) {
    return themeColors[index % themeColors.length];
  }
}
