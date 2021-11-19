/* eslint-disable no-unused-vars */
export interface IPostState {
  posts?: any[];
  loading: boolean;
  error: null | string;
}

export interface IPost {
  id: string;
  email: string;
  date: any;
  path: string;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  ADD_POST = 'ADD_POST',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
  ADD_POST_ERROR = 'ADD_POST_ERROR',
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

interface IAddPostAction {
  type: PostActionTypes.ADD_POST;
}

interface IAddPostSuccessAction {
  type: PostActionTypes.ADD_POST_SUCCESS;
  payload: string;
}

interface IAddPostErrorAction {
  type: PostActionTypes.ADD_POST_ERROR;
  payload: string;
}

export type IPostAction =
  | IFetchPostAction
  | IFetchPostSuccessAction
  | IFetchPostErrorAction
  | IAddPostAction
  | IAddPostSuccessAction
  | IAddPostErrorAction;
