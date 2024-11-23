import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment, PostDocument, RemoveCommentDocument, RemoveCommentMutation, RemoveCommentMutationVariables, UpdateCommentDocument, UpdateCommentMutation, UpdateCommentMutationVariables, WhoAmIDocument, WhoAmIQuery, WhoAmIQueryVariables } from '../../../graphql/generated';
import { Apollo } from 'apollo-angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from '../components/atoms/text-area/text-area.component';
import { ButtonComponent } from '../components/atoms/button/button.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TextAreaComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment
  @Input() fullWidth: boolean
  @Output() commentUpdated = new EventEmitter<void>();
  @Output() commentDeleted = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
  ) { }

  mode: 'read' | 'edit' | 'delete' = 'read'
  fullName: string
  commentForm = this.formBuilder.group({
    body: ['', Validators.required],
  })
  ownDocument: boolean = false

  onSubmit() {
    this.apollo.mutate<UpdateCommentMutation, UpdateCommentMutationVariables>({
      mutation: UpdateCommentDocument,
      variables: {
        updateCommentInput: {
          _id: this.comment._id,
          body: (this.commentForm.value.body ?? '').trim()
        }
      },
      refetchQueries: [
        {
          query: PostDocument,
          variables: { _id: this.comment?.postId },
          fetchPolicy: 'network-only',
        },
      ],
    }).subscribe(({ data }) => {
      this.commentForm.setValue({
        body: data?.updateComment.body ?? ''
      })
      this.mode = 'read'
      this.commentUpdated.emit(); // Notify parent
    })

  }

  onRemoveComment() {
    this.apollo.mutate<RemoveCommentMutation, RemoveCommentMutationVariables>({
      mutation: RemoveCommentDocument,
      variables: {
        _id: this.comment._id
      },
      refetchQueries: [
        { query: PostDocument, variables: { _id: this.comment?.postId } },
      ],
    }).subscribe(() => {
      this.mode = 'read'
      this.commentDeleted.emit(); // Notify parent

    })
  }

  cancel() {
    this.mode = 'read'
  }

  delete() {
    this.mode = 'delete'
  }

  edit() {
    this.mode = 'edit'
  }

  ngOnInit(): void {
    this.apollo
      .query<WhoAmIQuery, WhoAmIQueryVariables>({ query: WhoAmIDocument })
      .subscribe(({ data }) => {
        this.fullName = `${data?.whoAmI.firstName.trim() || ''} ${data?.whoAmI.lastName}`.trim()
        this.ownDocument = this.comment.userId === data.whoAmI._id

        this.commentForm.setValue({
          body: this.comment.body
        })
      })
  }
}
