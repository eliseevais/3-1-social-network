import React from 'react';
import {NavLink} from "react-router-dom";
import {Styles} from './SideBarOnlyMenu_Styles';

type MenuPropsType = {}

export function SideBarOnlyMenu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.SideBarOnlyMenu>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/myprofile">My profile</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/inbox">Inbox</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/friends">Friends</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/feeds">Feeds</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/melodies">Melodies</NavLink>
    </Styles.SideBarOnlyMenu>
  )
};