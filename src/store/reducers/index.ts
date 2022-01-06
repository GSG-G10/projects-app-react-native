import { combineReducers } from "redux";
import { projectsReducer } from "./projects";
import { changeReducer } from "./change";
import { authReducer } from "./auth";

export const reducer = combineReducers({
  projects: projectsReducer,
  change: changeReducer,
  auth: authReducer,
});
