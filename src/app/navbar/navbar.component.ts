import { Component } from '@angular/core';
import { NavlinkComponent } from "../navlink/navlink.component";
import { heroHomeSolid, heroUserSolid, heroPencilSquareSolid, heroArrowRightOnRectangleSolid } from '@ng-icons/heroicons/solid';
export type NavLink = {
  name: string
  link: string
  icon: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavlinkComponent,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links = [
    {
      name: 'Home',
      link: '/',
      icon: heroHomeSolid
    },
    {
      name: 'Users',
      link: '/users',
      icon: heroUserSolid
    },
    {
      name: 'Todos',
      link: '/posts',
      icon: heroPencilSquareSolid
    },
    {
      name: 'Log Out',
      link: '/logout',
      icon: heroArrowRightOnRectangleSolid
    },
  ]
}
