import { Dispatch } from 'react';
import { IPostAction, PostActionTypes } from '../../types/post';
import { ref } from '../../api/index';

const fetchPosts = async (dispatch: Dispatch<IPostAction>) => {
  try {
    dispatch({ type: PostActionTypes.FETCH_POSTS });
    const response = await ref
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

export default fetchPosts;
