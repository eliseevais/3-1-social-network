import styled from "styled-components";
import {myTheme} from "../../stylesGlobal/Theme.styled";

const Inbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: #000000;
  }
  
  a.isActive {
    background: ${myTheme.colors.accent};
    border-radius: 4px;
    padding: 0 4px;
  }
`

const ButtonSendMessage = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: ${myTheme.colors.accent};
  border: none;
  cursor: pointer;
`

const Dialog = styled.div`
  min-width: 200px;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
`

const DialogAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px 0 0;
`

const Message = styled.div`
  margin: 0 0 10px 0;
`

const NewMessageTextarea = styled.textarea`
  min-width: 300px;
  min-height: 40px;
  margin: 10px 10px 10px 0;
`

const NewMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Styles = {
  ButtonSendMessage,
  Inbox,
  Dialog,
  DialogAvatar,
  Message,
  NewMessageTextarea,
  NewMessageWrapper
}