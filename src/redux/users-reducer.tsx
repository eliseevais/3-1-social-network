import {
  ActionsPropsType,
  InitialStateUsersPagePropsType, UserPropsType,
} from "./storeAllPropsType";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState: InitialStateUsersPagePropsType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
}
export const usersReducer = (
  state: InitialStateUsersPagePropsType = initialState,
  action: ActionsPropsType): InitialStateUsersPagePropsType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      } as InitialStateUsersPagePropsType
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      } as InitialStateUsersPagePropsType
    case SET_USERS:
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount}
    default:
      return state
  }
}

export const followAC = (userId: number) => {
  return {type: FOLLOW, userId}
};
export const unfollowAC = (userId: number) => {
  return {type: UNFOLLOW, userId};
};
export const setUsersAC = (users: Array<UserPropsType>) => {
  return {type: SET_USERS, users};
};
export const setCurrentPageAC = (currentPage: number) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCountAC = (totalCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
