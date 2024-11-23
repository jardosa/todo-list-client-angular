import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Post, PostDocument, PostQuery, PostQueryVariables } from '../../../../graphql/generated';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from "../post/post.component";
import { AddCommentComponent } from "../../add-comment/add-comment.component";
import { CommentComponent } from "../../comment/comment.component";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    AddCommentComponent,
    CommentComponent
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private location: Location,
  ) { }


  post: Post

  fetchPost(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.apollo
      .query<PostQuery, PostQueryVariables>({
        query: PostDocument,
        variables: { _id: id ?? '' },
        fetchPolicy: 'network-only',
      })
      .subscribe(({ data }) => {
        this.post = { ...data.post };
      });
  }


  ngOnInit(): void {
    this.fetchPost()
  }

  onCommentUpdated(): void {
    this.fetchPost();
  }

  onCommentDeleted(): void {
    this.fetchPost();
  }
}
