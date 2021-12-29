import { combineReducers } from 'redux';
import { projectsReducer } from './projects';
import {changeReducer} from './change'

export const reducer = combineReducers({
    projects: projectsReducer,
    change: changeReducer,
})