import {Users} from "./Users";
import {connect} from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
  InitialStateUsersPagePropsType, UserPropsType,

} from "../../redux/storeAllPropsType";

type MSTPType = {
  usersPage: InitialStateUsersPagePropsType
};
type MDTPType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserPropsType>) => void
}

export type UsersPagePropsType = MSTPType & MDTPType
const MSTP = (state: AppStateType): MSTPType => {
  return {
    usersPage: state.usersPage
  }
}
const MDTP = (dispatch: Dispatch): MDTPType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserPropsType>) => {
      dispatch(setUsersAC(users))
    }
  }
}
export default connect(MSTP, MDTP)(Users)