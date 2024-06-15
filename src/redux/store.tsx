import Dmitry from '../accets/img/Dmitry.jpg';
import Ekaterina from '../accets/img/Ekaterina.jpg';
import Maria from '../accets/img/Maria.jpg';
import Olga from '../accets/img/Olga.jpg';
import Maxim from '../accets/img/Maxim.jpg';
import {StorePropsType} from "./storeAllPropsType";
import {myPostsPageReducer} from "./myPosts-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {feedsReducer} from "./feeds-reducer";

export let store: StorePropsType = {
  _state: {
    myPostsPage: {
      posts: [
        {id: 1, message: 'It\'s my first post.', likesCount: 9},
        {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
        {id: 3, message: 'Winter is coming to our city', likesCount: 3},
        {id: 4, message: 'Happy New Year!', likesCount: 7},
        {id: 5, message: 'The weather was -24 today.', likesCount: 10},
        {id: 6, message: 'I like it-incubator!', likesCount: 23}
      ],
      newPostText: 'Hello from store.tsx'
    },
    inboxPage: {
      dialogs: [
        {id: 1, name: 'Dmitry', img: Dmitry},
        {id: 2, name: 'Ekaterina', img: Ekaterina},
        {id: 3, name: 'Maria', img: Maria},
        {id: 4, name: 'Olga', img: Olga},
        {id: 5, name: 'Maxim', img: Maxim}
      ],
      messages: [
        {id: 1, message: 'Hello, my friend!'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Would you like to go to the cinema?'},
        {id: 4, message: 'No, thanks, I will stay at home to study.'},
      ],
      newMessageText: ''
    },
    usersPage: {
      users: [],
      pageSize: 10,
      totalUsersCount: 0,
      currentPage: 1
    },
    feedsPage: {
      feeds: [
        {id: 1, text: 'This is the first news!'},
        {id: 2, text: 'This is the second news!'},
        {id: 3, text: 'This is the third news!'}
      ]
    }
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.myPostsPage = myPostsPageReducer(this._state.myPostsPage, action);
    this._state.inboxPage = dialogsReducer(this._state.inboxPage, action);
    this._state.feedsPage = feedsReducer(this._state.feedsPage, action);
    this._callSubscriber(this._state);
  }
};