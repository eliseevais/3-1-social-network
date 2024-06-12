import styled from "styled-components";

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px 0 0;
`

const PostTextAndLikesCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Post = styled.div`
  min-height: 40px;
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Styles = {
  Avatar,
  Post,
  PostTextAndLikesCounterWrapper,
}