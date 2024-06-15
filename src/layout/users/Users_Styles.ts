import styled from "styled-components";
import {myTheme} from "../../stylesGlobal/Theme.styled";

const ButtonFollowUnfollow = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: ${myTheme.colors.accent};
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`

const Location = styled.div`

`

const NameAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PhotoAndButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 80px;
  margin: 10px;
`

const UserPreview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

const UserWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  margin: 10px;
  background-color: ${myTheme.colors.ground};
  padding: 14px;
  box-sizing: border-box;
  border-radius: 30px;
`

const Page = styled.span`
  cursor: pointer;
  margin: 4px;
`

const SelectedPage = styled(Page)`
  font-weight: 900;
`

export const Styles = {
  ButtonFollowUnfollow,
  Location,
  NameAndStatus,
  PhotoAndButton,
  UserAvatar,
  UserPreview,
  UserWrapper,
  SelectedPage,
  Page
}