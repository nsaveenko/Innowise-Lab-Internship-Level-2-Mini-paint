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
    case PostActionTypes.ADD_POST:
      return { loading: true, error: null };
    case PostActionTypes.ADD_POST_SUCCESS:
      return { loading: false, error: null };
    case PostActionTypes.ADD_POST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
