import {
  ActionsPropsType,
  InitialStateUsersPagePropsType, UserPropsType,
} from "./storeAllPropsType";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState: InitialStateUsersPagePropsType = {
  users: []
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
      return {...state, users: [...state.users, ...action.users]}
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
}