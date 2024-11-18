import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputComponent } from "../components/atoms/input/input.component";
import { ButtonComponent } from "../components/atoms/button/button.component";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TextAreaComponent } from "../components/atoms/text-area/text-area.component";
import { Apollo } from 'apollo-angular';
import { CreatePostDocument, CreatePostMutation, CreatePostMutationVariables, PostQueryVariables, PostsDocument, PostsQuery, PostsQueryVariables, WhoAmIDocument, WhoAmIQuery, WhoAmIQueryVariables } from '../../../graphql/generated';
import { Subscription } from 'rxjs';
import { PostComponent } from '../posts/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo
  ) { }

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  error: string = ''
  posts: PostsQuery['posts'] = [];

  onSubmit() {
    this.apollo.mutate<CreatePostMutation, CreatePostMutationVariables>({
      mutation: CreatePostDocument,
      variables: {
        createPostInput: {
          title: this.todoForm.value.title ?? '',
          description: this.todoForm.value.description ?? '',
        }
      },
    }).subscribe(({ data }) => {
    }, error => {
      this.error = error.message
    })
  }

  private querySubscription: Subscription;

  ngOnInit(): void {
    this.apollo
      .query<WhoAmIQuery, WhoAmIQueryVariables>({ query: WhoAmIDocument })
      .subscribe(({ data }) => {
        this.querySubscription = this.apollo
          .watchQuery<PostsQuery, PostsQueryVariables>({
            query: PostsDocument,
            variables: {
              searchInput: {
                userId: data.whoAmI._id
              }
            }
          })
          .valueChanges.subscribe(({ data, loading }) => {
            this.posts = data.posts;
          });
      })

  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe()
  }
}
