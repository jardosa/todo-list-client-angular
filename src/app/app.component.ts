import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { provideIcons } from '@ng-icons/core';
import { heroHomeSolid, heroUserSolid, heroPencilSquareSolid, heroArrowRightOnRectangleSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroHomeSolid, heroUserSolid, heroPencilSquareSolid, heroArrowRightOnRectangleSolid })]
})
export class AppComponent {
  title = 'todo-list-client-angular';
}
