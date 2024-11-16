import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem('authToken')
  }
}
