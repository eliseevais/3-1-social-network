import React from "react";
import {DialogItemPropsType} from "../../../redux/storeAllPropsType";
import {NavLink} from "react-router-dom";
import {Styles} from "../Dialogs_Styles";

export const DialogItem = (props: DialogItemPropsType) => {
  let path = '/inbox/' + props.id;
  return (
    <Styles.Dialog>
      <Styles.DialogAvatar src={props.img}/>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to={path}>
        {props.name}
      </NavLink>
    </Styles.Dialog>
  )
};