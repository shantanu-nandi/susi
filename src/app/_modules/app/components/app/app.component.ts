import { Component } from '@angular/core';

import { ThemeService } from 'src/app/_services/theme.service';
import { defaultTheme } from 'src/app/_models/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'susi';

  constructor(themeService: ThemeService) {
    themeService.loadStyle(defaultTheme.styleName);
  }
}
