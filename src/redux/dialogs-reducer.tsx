import Dmitry from "../accets/img/Dmitry.jpg";
import Ekaterina from "../accets/img/Ekaterina.jpg";
import Maria from "../accets/img/Maria.jpg";
import Olga from "../accets/img/Olga.jpg";
import Maxim from "../accets/img/Maxim.jpg";
import {
  ActionsPropsType, DialogItemPropsType, MessagePropsType, NextMessagePropsType,
  SendMessageActionType,
  UpdateNewMessageTextActionType
} from "./storeAllPropsType";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type InitialStateInboxPagePropsType = typeof initialState;

let initialState = {
  dialogs: [
    {id: 1, name: 'Dmitry', img: Dmitry},
    {id: 2, name: 'Ekaterina', img: Ekaterina},
    {id: 3, name: 'Maria', img: Maria},
    {id: 4, name: 'Olga', img: Olga},
    {id: 5, name: 'Maxim', img: Maxim}
  ] as Array<DialogItemPropsType>,
  messages: [
    {id: 1, message: 'Hello, my friend!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Would you like to go to the cinema?'},
    {id: 4, message: 'No, thanks, I will stay at home to study.'},
  ] as Array<MessagePropsType>,
  newMessageText: ''
}

export const dialogsReducer = (
  state: InitialStateInboxPagePropsType = initialState,
  action: ActionsPropsType): InitialStateInboxPagePropsType => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    case SEND_MESSAGE:
      let nextMessage: NextMessagePropsType = {
        id: new Date().getTime(),
        message: state.newMessageText
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, nextMessage]
    }
    default:
      return state
  }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextActionType => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
};
export const sendMessageAC = (): SendMessageActionType => ({type: SEND_MESSAGE});