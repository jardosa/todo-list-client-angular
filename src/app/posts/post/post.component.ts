import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Post, PostStatus, RemovePostDocument, RemovePostMutation, RemovePostMutationVariables, UpdatePostDocument, UpdatePostMutation, UpdatePostMutationVariables, WhoAmIDocument, WhoAmIQuery, WhoAmIQueryVariables } from '../../../../graphql/generated';
import { InputComponent } from '../../components/atoms/input/input.component';
import { TextAreaComponent } from '../../components/atoms/text-area/text-area.component';
import { Apollo } from 'apollo-angular';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import { SelectComponent } from '../../components/atoms/select/select.component';
import { startCase } from 'lodash';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post: Post
  @Input() showCommentCount: boolean = false
  @Input() fullWidth: boolean = false
  @Input() showUser: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private router: Router,
  ) { }

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required]
  })

  mode: 'read' | 'write' = 'read'
  options = Object.entries(PostStatus).map(([key, val]) => ({
    name: startCase(key),
    value: val
  }))

  ngOnInit(): void {
    this.apollo
      .query<WhoAmIQuery, WhoAmIQueryVariables>({ query: WhoAmIDocument })
      .subscribe(({ data }) => {
        this.fullName = `${data?.whoAmI.firstName} ${data?.whoAmI.lastName}`
        this.ownDocument = this.post.userId === data.whoAmI._id
      })

    this.todoForm.setValue({
      title: this.post.title,
      description: this.post.description,
      status: this.post.status
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isInIndividualPostPage = event.urlAfterRedirects === `/posts/${this.post._id}`;
        if (isInIndividualPostPage) {
          this.router.navigate([''])
        }
      }
    });
  }

  fullName: string
  updateError: string
  deleteError: string
  ownDocument: boolean

  onSubmit() {
    this.apollo.mutate<UpdatePostMutation, UpdatePostMutationVariables>({
      mutation: UpdatePostDocument,
      variables: {
        updatePostInput: {
          _id: this.post._id,
          title: this.todoForm.value.title ?? '',
          description: this.todoForm.value.description ?? '',
          status: this.todoForm.value.status as PostStatus
        }
      },
    }).subscribe(({ data }) => {
    }, error => {
      this.updateError = error.message
    })
  }

  onDelete() {
    this.apollo.mutate<RemovePostMutation, RemovePostMutationVariables>({
      mutation: RemovePostDocument,
      variables: {
        _id: this.post._id
      },
    }).subscribe(({ data }) => {
    }, error => {
      this.deleteError = error.message
    })
  }

  toggleMode() {
    this.mode = this.mode === 'read' ? 'write' : 'read'
  }


}
