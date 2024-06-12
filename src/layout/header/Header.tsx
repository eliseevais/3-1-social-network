import React from 'react';
import { Styles } from './Header_Styles';
import { Container } from '../../componentsWrappers/Container_Styles';
import { FlexWrapper } from '../../componentsWrappers/FlexWrapper';

type HeaderStyledPropsType = {
  title: string;
}

export function Header(props: HeaderStyledPropsType) {
  return (
    <Styles.Header>
      <Container>
        <FlexWrapper align="center" justify="flex-end">
          <span>{props.title}</span>
        </FlexWrapper>
      </Container>
    </Styles.Header>
  );
};