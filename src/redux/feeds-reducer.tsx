import {ActionsPropsType} from "./storeAllPropsType";

let initialState = {
  feeds: [
    {id: 1, text: 'This is the first news!'},
    {id: 2, text: 'This is the second news!'},
    {id: 3, text: 'This is the third news!'}
  ]
};
export const feedsReducer = (state = initialState, action: ActionsPropsType) => {

  return state
}