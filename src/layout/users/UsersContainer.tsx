import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {UserPropsType} from "../../redux/storeAllPropsType";
import Users from "./Users";

type MSTPType = {
  usersPage: Array<UserPropsType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number
};
type MDTPType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserPropsType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalCount: number) => void
}

export type UsersPagePropsType = MSTPType & MDTPType
const MSTP = (state: AppStateType): MSTPType => {
  return {
    usersPage: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(MSTP, MDTP)(Users)