import React from 'react';
import {AppStoreType} from "./redux/reduxStore";
import {Header} from './layout/header/Header';
import {SideBarWithMenuAndLogo} from './layout/sideBarWithMenuAndLogo/SideBarWithMenuAndLogo';
import {WrapperForContent} from "./layout/main/WrapperForContent";
import {FlexWrapper} from "./componentsWrappers/FlexWrapper";
import {Container} from "./componentsWrappers/Container_Styles";
import {AppWrapper} from "./App_Styles";
import {useSelector} from "react-redux";

// type AppPropsType = {
//   store: AppStoreType
// };
// const App: React.FC<AppPropsType> = (props) => {

const App = () => {
  const appStore = useSelector(state => state)
  console.log('appStore', appStore)
  return (
    <AppWrapper>
      <Header title="Login"/>
      <Container>
        <FlexWrapper>
          <SideBarWithMenuAndLogo/>
          <WrapperForContent/>
        </FlexWrapper>
      </Container>
    </AppWrapper>
  );
};

export default App;