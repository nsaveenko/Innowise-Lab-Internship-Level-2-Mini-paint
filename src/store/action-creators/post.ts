import { Dispatch } from 'react';
import { IPostAction, PostActionTypes, IPost } from '../../types/post';
import { ref } from '../../api/index';
import { ERROR_MESSAGES, INFO_MESSAGES } from '../../utils/messages';

export const fetchPosts = async (dispatch: Dispatch<IPostAction>) => {
  try {
    dispatch({ type: PostActionTypes.FETCH_POSTS });
    await ref
      .orderBy('date', 'desc')
      .get()
      .then((item) => {
        const items = item.docs.map((doc: any) => doc.data());
        dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: items });
      });
  } catch (e) {
    dispatch({
      type: PostActionTypes.FETCH_POSTS_ERROR,
      payload: 'Posts were not loaded',
    });
  }
};

export const addPost = (post: IPost) => (dispatch: any) => {
  try {
    dispatch({ type: PostActionTypes.ADD_POST });
    ref
      .doc(post.id)
      .set(post);
    dispatch({ type: PostActionTypes.ADD_POST_SUCCESS, payload: INFO_MESSAGES.CREATED });
  } catch (e) {
    dispatch({
      type: PostActionTypes.ADD_POST_ERROR,
      payload: ERROR_MESSAGES.POST_NOT_UPLOADED_MESSAGE,
    });
  }
};
