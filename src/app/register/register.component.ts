import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../components/atoms/input/input.component';
import { ButtonComponent } from '../components/atoms/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  })

  error = ''

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}
