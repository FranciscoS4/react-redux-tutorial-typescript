import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
  course,
});

export type RootState = ReturnType<typeof combineReducers>