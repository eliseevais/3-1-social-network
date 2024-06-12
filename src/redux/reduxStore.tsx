import {combineReducers, createStore} from "redux";
import {myPostsPageReducer} from "./myPosts-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {feedsReducer} from "./feeds-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
  myPostsPage: myPostsPageReducer,
  inboxPage: dialogsReducer,
  feedsPage: feedsReducer,
  usersPage: usersReducer
});

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);