import { Component } from '@angular/core';
import { InputComponent } from "../components/atoms/input/input.component";
import { ButtonComponent } from "../components/atoms/button/button.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
