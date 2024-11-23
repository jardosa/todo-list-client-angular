import { Component, Input, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { CreateCommentMutation, CreateCommentMutationVariables, CreateCommentDocument } from '../../../graphql/generated';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/atoms/input/input.component';
import { ButtonComponent } from "../components/atoms/button/button.component";

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent {
  @Input() postId: string

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,) {
  }

  commentForm = this.formBuilder.group({
    body: ['', Validators.required],
  })

  onSubmit() {
    this.apollo.mutate<CreateCommentMutation, CreateCommentMutationVariables>({
      mutation: CreateCommentDocument,
      variables: {
        createCommentInput: {
          postId: this.postId ?? '',
          body: (this.commentForm.value.body ?? '').trim()
        }
      },
    }).subscribe()
  }
}
