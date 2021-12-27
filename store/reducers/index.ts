import { combineReducers } from 'redux';
import { projectsReducer } from './projects';

export const reducer = combineReducers({
    projects: projectsReducer,
})