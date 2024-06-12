import React from "react";
import {Redirect, Route} from "react-router-dom";
import {Melodies} from "../melodies/Melodies";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {DialogsContainer} from "../inbox/DialogsContainer";
import {Styles} from "./ContentWindow_Styles";
import {Feeds} from "../feeds/Feeds";
import FriendsContainer from "../users/UsersContainer";

export const WrapperForContent = () => {
  return (
    <Styles.WrapperForContent>
      <Redirect from='/' to='/myprofile'/>
      <Route path='/myprofile' render={() => <MyPostsContainer/>}/>
      <Route path='/inbox' render={() => <DialogsContainer/>}/>
      <Route path='/friends' render={() => <FriendsContainer/>}/>

      <Route path='/melodies' component={Melodies}/>

      {/*<Route path='/feeds' render={*/}
      {/*  () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>*/}

    </Styles.WrapperForContent>
  )
}
