import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { ThemeService } from 'src/app/_services/theme.service';
import { themes, Theme } from 'src/app/_models/theme';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isExpanded = false;
  themes = themes;
  user$: Observable<User>;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _themeService: ThemeService) {}

  ngOnInit() {
    this.user$ = this._authService.user$;
  }

  changeTheme(theme: Theme) {
    this._themeService.loadStyle(theme.styleName);
  }

  logout() {
    this._authService.signOut()
      .then(() => this._router.navigate(['/']),
      (error) => console.log(error));
  }
}
