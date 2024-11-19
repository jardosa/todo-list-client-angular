import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PostComponent } from './post/post.component';
import { WhoAmIQuery, WhoAmIQueryVariables, WhoAmIDocument, PostsQuery, PostsQueryVariables, PostsDocument } from '../../../graphql/generated';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, RouterLink, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  constructor(
    private apollo: Apollo
  ) {

  }
  private querySubscription: Subscription
  posts: PostsQuery['posts'] = [];
  fullName: string

  ngOnInit(): void {
    this.apollo
      .query<WhoAmIQuery, WhoAmIQueryVariables>({ query: WhoAmIDocument })
      .subscribe(({ data }) => {
        this.fullName = `${data.whoAmI.firstName} + ${data.whoAmI.lastName}`
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
}
