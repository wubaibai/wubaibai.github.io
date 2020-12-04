import { combineReducers } from 'redux';

import * as routing from './routing';

// For Global State interface
export interface State {
	routing: routing.State;
}

const reducers = combineReducers<State>({
	...routing.reducer,
});

export default reducers;
