import { types } from '../../actions/types';
import postReducer from './reducer';


describe('Posts Reducer', () => {

  it('should return default state', () => {
    const newState = postReducer(undefined, {})
    expect(newState).toEqual([]);
  });

  it('should return new state if receiving action type', () => {
    const posts = [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });

});
