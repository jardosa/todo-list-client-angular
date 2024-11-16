import { Component, Input } from '@angular/core';
import { NavLink } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-navlink',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent {
  @Input() link!: NavLink
}
