import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Comment = Node & TimeStamps & {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  postId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};

export type CreatePostInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  authToken: Scalars['String']['output'];
  profile: Profile;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createPost: Post;
  createUser: User;
  echo: Scalars['String']['output'];
  login: LoginPayload;
  register: LoginPayload;
  removeComment: Comment;
  removePost: Post;
  removeUser: User;
  updateComment: Comment;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEchoArgs = {
  message: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: CreateUserInput;
};


export type MutationRemoveCommentArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationRemovePostArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Node = {
  _id: Scalars['ID']['output'];
};

export type Post = Node & TimeStamps & {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  comments: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  status: PostStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};


export type PostCommentsArgs = {
  searchInput?: InputMaybe<SearchCommentsInputNoId>;
};

export enum PostStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  NotCompleted = 'NotCompleted',
  NotStarted = 'NotStarted'
}

export type Profile = Node & {
  __typename?: 'Profile';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  ping: Scalars['String']['output'];
  post: Post;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
  whoAmI: User;
};


export type QueryCommentArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  searchInput: SearchCommentsInput;
};


export type QueryPostArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  searchInput: SearchPostsInput;
};


export type QueryUserArgs = {
  input: SearchUserInput;
};


export type QueryUsersArgs = {
  input?: InputMaybe<SearchUsersInput>;
};

export type SearchCommentsInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  postId: Scalars['ID']['input'];
};

export type SearchCommentsInputNoId = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type SearchPostsInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['ID']['input'];
};

export type SearchUserInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type SearchUsersInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type TimeStamps = {
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCommentInput = {
  _id: Scalars['ID']['input'];
  body: Scalars['String']['input'];
};

export type UpdatePostInput = {
  _id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  status: PostStatus;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  _id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & TimeStamps & {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string } };

export type RegisterMutationVariables = Exact<{
  registerInput: CreateUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginPayload', authToken: string, profile: { __typename?: 'Profile', _id: string, firstName?: string | null, lastName?: string | null, email: string } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', authToken: string, profile: { __typename?: 'Profile', _id: string, firstName?: string | null, lastName?: string | null, email: string } } };

export type ProfileFieldsFragment = { __typename?: 'LoginPayload', profile: { __typename?: 'Profile', _id: string, firstName?: string | null, lastName?: string | null, email: string } };

export type CommentQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type CommentQuery = { __typename?: 'Query', comment?: { __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any } | null };

export type CommentsQueryVariables = Exact<{
  searchInput: SearchCommentsInput;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any }> };

export type CreateCommentMutationVariables = Exact<{
  createCommentInput: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any } };

export type UpdateCommentMutationVariables = Exact<{
  updateCommentInput: UpdateCommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any } };

export type RemoveCommentMutationVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type RemoveCommentMutation = { __typename?: 'Mutation', removeComment: { __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any } };

export type CommentFieldsFragment = { __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any } };

export type PostQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
  searchInput?: InputMaybe<SearchCommentsInputNoId>;
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any, comments: Array<{ __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any }> } };

export type PostsQueryVariables = Exact<{
  searchInput: SearchPostsInput;
  searchCommentsInput?: InputMaybe<SearchCommentsInputNoId>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any, comments: Array<{ __typename?: 'Comment', _id: string, postId: string, body: string, userId: string, createdAt: any, updatedAt: any }> }> };

export type RemovePostMutationVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: { __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any } };

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any } };

export type PostFieldsFragment = { __typename?: 'Post', _id: string, title: string, description: string, status: PostStatus, userId: string, createdAt: any, updatedAt: any };

type TimestampFields_Comment_Fragment = { __typename?: 'Comment', createdAt: any, updatedAt: any };

type TimestampFields_Post_Fragment = { __typename?: 'Post', createdAt: any, updatedAt: any };

type TimestampFields_User_Fragment = { __typename?: 'User', createdAt: any, updatedAt: any };

export type TimestampFieldsFragment = TimestampFields_Comment_Fragment | TimestampFields_Post_Fragment | TimestampFields_User_Fragment;

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type RemoveUserMutationVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type UsersQueryVariables = Exact<{
  input?: InputMaybe<SearchUsersInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any }> };

export type UserQueryVariables = Exact<{
  input: SearchUserInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } | null };

export type UserFieldsFragment = { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any };

export const ProfileFieldsFragmentDoc = gql`
    fragment profileFields on LoginPayload {
  profile {
    _id
    firstName
    lastName
    email
  }
}
    `;
export const CommentFieldsFragmentDoc = gql`
    fragment commentFields on Comment {
  _id
  postId
  body
  userId
  createdAt
  updatedAt
}
    `;
export const PostFieldsFragmentDoc = gql`
    fragment postFields on Post {
  _id
  title
  description
  status
  userId
  createdAt
  updatedAt
}
    `;
export const TimestampFieldsFragmentDoc = gql`
    fragment timestampFields on TimeStamps {
  createdAt
  updatedAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  _id
  firstName
  lastName
  email
  createdAt
  updatedAt
}
    `;
export const WhoAmIDocument = gql`
    query WhoAmI {
  whoAmI {
    _id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WhoAmIGQL extends Apollo.Query<WhoAmIQuery, WhoAmIQueryVariables> {
    document = WhoAmIDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation Register($registerInput: CreateUserInput!) {
  register(registerInput: $registerInput) {
    authToken
    ...profileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    authToken
    ...profileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentDocument = gql`
    query Comment($_id: ID!) {
  comment(_id: $_id) {
    ...commentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentGQL extends Apollo.Query<CommentQuery, CommentQueryVariables> {
    document = CommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentsDocument = gql`
    query Comments($searchInput: SearchCommentsInput!) {
  comments(searchInput: $searchInput) {
    ...commentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentsGQL extends Apollo.Query<CommentsQuery, CommentsQueryVariables> {
    document = CommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCommentDocument = gql`
    mutation CreateComment($createCommentInput: CreateCommentInput!) {
  createComment(createCommentInput: $createCommentInput) {
    ...commentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCommentGQL extends Apollo.Mutation<CreateCommentMutation, CreateCommentMutationVariables> {
    document = CreateCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCommentDocument = gql`
    mutation UpdateComment($updateCommentInput: UpdateCommentInput!) {
  updateComment(updateCommentInput: $updateCommentInput) {
    ...commentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCommentGQL extends Apollo.Mutation<UpdateCommentMutation, UpdateCommentMutationVariables> {
    document = UpdateCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveCommentDocument = gql`
    mutation RemoveComment($_id: ID!) {
  removeComment(_id: $_id) {
    ...commentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveCommentGQL extends Apollo.Mutation<RemoveCommentMutation, RemoveCommentMutationVariables> {
    document = RemoveCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PingGQL extends Apollo.Query<PingQuery, PingQueryVariables> {
    document = PingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostDocument = gql`
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    document = CreatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostDocument = gql`
    query Post($_id: ID!, $searchInput: SearchCommentsInputNoID) {
  post(_id: $_id) {
    ...postFields
    comments(searchInput: $searchInput) {
      ...commentFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostGQL extends Apollo.Query<PostQuery, PostQueryVariables> {
    document = PostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostsDocument = gql`
    query Posts($searchInput: SearchPostsInput!, $searchCommentsInput: SearchCommentsInputNoID) {
  posts(searchInput: $searchInput) {
    ...postFields
    comments(searchInput: $searchCommentsInput) {
      ...commentFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemovePostDocument = gql`
    mutation RemovePost($_id: ID!) {
  removePost(_id: $_id) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemovePostGQL extends Apollo.Mutation<RemovePostMutation, RemovePostMutationVariables> {
    document = RemovePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePostDocument = gql`
    mutation UpdatePost($updatePostInput: UpdatePostInput!) {
  updatePost(updatePostInput: $updatePostInput) {
    ...postFields
  }
}
    ${PostFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostGQL extends Apollo.Mutation<UpdatePostMutation, UpdatePostMutationVariables> {
    document = UpdatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveUserDocument = gql`
    mutation RemoveUser($_id: ID!) {
  removeUser(_id: $_id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveUserGQL extends Apollo.Mutation<RemoveUserMutation, RemoveUserMutationVariables> {
    document = RemoveUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersDocument = gql`
    query Users($input: SearchUsersInput) {
  users(input: $input) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserDocument = gql`
    query User($input: SearchUserInput!) {
  user(input: $input) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }