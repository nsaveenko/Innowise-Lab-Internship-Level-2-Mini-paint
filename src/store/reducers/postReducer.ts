import { PostActionTypes, IPostAction, IPostState } from '../../types/post';

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: IPostAction): IPostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { loading: true, error: null, posts: [] };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};

export default postReducer;
