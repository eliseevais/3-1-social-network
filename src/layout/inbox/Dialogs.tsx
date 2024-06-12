import React from "react";
import {InboxPagePropsType} from "../../redux/storeAllPropsType";
import {DialogItem} from "./dialogItem/DialogItem";
import {MessageItem} from "./messageItem/MessageItem";
import {Styles} from "./Dialogs_Styles";

export type InboxPropsType = {
  inboxPage: InboxPagePropsType
  updateNewMessageText: (text: string) => void;
  sendMessage: () => void
};

export const Dialogs = (props: InboxPropsType) => {

  let state = props.inboxPage;

  let dialogsElements = state.dialogs.map(dialog =>
    <DialogItem key={dialog.id}
                name={dialog.name}
                id={dialog.id}
                img={dialog.img}
    />);

  let messagesElements = state.messages.map(message =>
    <MessageItem key={message.id} message={message.message}/>);

  let newMessageTextarea = state.newMessageText;

  let onClickSendMessageHandler = () => {
    props.sendMessage()
  };

  const onChangeNewMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.currentTarget.value;
    if (text) {
      props.updateNewMessageText(text)
    }
  };

  return (
    <Styles.Inbox>
      <div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <Styles.NewMessageWrapper>
          <Styles.NewMessageTextarea value={state.newMessageText}
                                     onChange={onChangeNewMessageHandler}
                                     placeholder={'Enter your message'}
          />
          <Styles.ButtonSendMessage
            onClick={onClickSendMessageHandler}>send</Styles.ButtonSendMessage>
        </Styles.NewMessageWrapper>
      </div>
    </Styles.Inbox>
  )
}