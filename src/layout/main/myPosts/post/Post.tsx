import React from 'react';
import bird from '../../../../accets/img/bird.jpg';
import {Styles} from "./Post_Styles";

type PostPropsType = {
  message: string;
  likesCount: number;
}
export const Post = (props: PostPropsType) => {
  return (
    <Styles.Post>
      <Styles.Avatar src={bird} alt='avatar'/>
      <Styles.PostTextAndLikesCounterWrapper>
        <span>{props.message}</span>
        <span> {props.likesCount} &#x2661;</span>
      </Styles.PostTextAndLikesCounterWrapper>
    </Styles.Post>
  );
};