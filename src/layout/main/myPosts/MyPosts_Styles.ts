import styled from "styled-components";
import {myTheme} from "../../../stylesGlobal/Theme.styled";

const AddPostButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: ${myTheme.colors.accent};
  border: none;
  cursor: pointer;
`

const NewPostTextarea = styled.textarea`
  min-width: 300px;
  min-height: 40px;
  margin: 10px 10px 10px 0;
`

const NewPostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Styles = {
  AddPostButton,
  NewPostTextarea,
  NewPostWrapper,
}