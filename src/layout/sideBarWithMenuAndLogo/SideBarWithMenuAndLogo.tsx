import React from 'react';
import flowers from '../../accets/img/flowers.jpg';
import {SideBarOnlyMenu} from "./sideBarOnlyMenu/SideBarOnlyMenu";
import {Styles} from './SideBarWithMenuAndLogo_Styles';
import {FlexWrapper} from '../../componentsWrappers/FlexWrapper';

type ContentPropsType = {}

export function SideBarWithMenuAndLogo(props: ContentPropsType) {
  return (
    <Styles.SideBarWithMenuAndLogo>
      <FlexWrapper direction="column">
        <SideBarOnlyMenu/>
        <Styles.SideBarOnlyLogo>
          <img src={flowers} alt="img"/>
        </Styles.SideBarOnlyLogo>
      </FlexWrapper>
    </Styles.SideBarWithMenuAndLogo>
  )
}