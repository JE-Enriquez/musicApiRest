import { combineReducers } from "redux";
import songReducer from "./libraryReducer";

const rootReducer = combineReducers({
    library: songReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;