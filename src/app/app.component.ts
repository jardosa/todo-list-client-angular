import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  showNavbar: boolean = true; // Default state of the navbar

  title = 'todo-list-client-angular';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = ['/login', '/register', '/logout'];
        this.showNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
