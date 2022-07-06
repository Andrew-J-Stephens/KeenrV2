import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChallengeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Challenge {
  readonly id: string;
  readonly title: string;
  readonly type: number;
  readonly active: boolean;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Challenge, ChallengeMetaData>);
  static copyOf(source: Challenge, mutator: (draft: MutableModel<Challenge, ChallengeMetaData>) => MutableModel<Challenge, ChallengeMetaData> | void): Challenge;
}

export declare class Post {
  readonly id: string;
  readonly filename: string;
  readonly username: string;
  readonly challenge?: Challenge | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly userID: string;
  readonly username: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}