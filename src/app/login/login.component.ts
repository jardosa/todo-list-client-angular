import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../components/atoms/input/input.component";
import { ButtonComponent } from "../components/atoms/button/button.component";
import { Router, RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LoginDocument, LoginGQL, LoginMutation, LoginMutationVariables } from '../../../graphql/generated';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private router: Router,
  ) { }


  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    this.apollo.mutate<LoginMutation, LoginMutationVariables>({
      mutation: LoginDocument,
      variables: {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? '',
      }
    }).subscribe(
      ({ data }) => {
        localStorage.setItem('authToken', data?.login.authToken ?? '')
        this.router.navigate(['/'])
      },
      error => {
        this.error = error.message
      },
    );
  }

  error: string = ''
}
