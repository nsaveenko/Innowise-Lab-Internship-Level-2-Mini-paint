export interface IPostState {
  posts: any[];
  loading: boolean;
  error: null | string;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface IFetchPostAction {
  type: PostActionTypes.FETCH_POSTS;
}

interface IFetchPostSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: any[];
}

interface IFetchPostErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type IPostAction = IFetchPostAction | IFetchPostSuccessAction | IFetchPostErrorAction;
