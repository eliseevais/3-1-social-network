import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {UserPropsType} from "../../redux/storeAllPropsType";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersPagePropsType, AppStateType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    return <Users currentPage={this.props.currentPage}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  onPageChanged={this.onPageChanged}
                  usersPage={this.props.usersPage}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
    />
  }
}


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

export default connect(MSTP, MDTP)(UsersContainer)