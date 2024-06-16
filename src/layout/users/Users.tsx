import {Styles} from "./Users_Styles";
import userImage from "../../accets/img/imageUser.jpg";
import React from "react";
import {UserPropsType} from "../../redux/storeAllPropsType";

type UsersPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (p: number) => void;
  usersPage: Array<UserPropsType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
}

export const Users = (props: UsersPropsType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return props.currentPage === p
            ? <Styles.SelectedPage
              key={`pagination-page-${p}`}
            >
              {p}</Styles.SelectedPage>
            : <Styles.Page key={`pagination-page-${p}`}
                           onClick={() => {
                             props.onPageChanged(p)
                           }}>{p}</Styles.Page>
        })}
      </div>
      <div>
        {
          props.usersPage.map(u => <Styles.UserWrapper key={u.id}>
              <Styles.PhotoAndButton>
                <Styles.UserAvatar src={u.photos.small != null
                  ? u.photos.small
                  : userImage}/>
                <div>
                  {
                    u.followed
                      ? <Styles.ButtonFollowUnfollow
                        onClick={() => props.unfollow(u.id)}>
                        Unfollow
                      </Styles.ButtonFollowUnfollow>
                      : <Styles.ButtonFollowUnfollow
                        onClick={() => props.follow(u.id)}>
                        Follow
                      </Styles.ButtonFollowUnfollow>
                  }
                </div>
              </Styles.PhotoAndButton>
              <Styles.UserPreview>
                <Styles.NameAndStatus>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </Styles.NameAndStatus>
              </Styles.UserPreview>

            </Styles.UserWrapper>
          )
        }
      </div>
    </div>
  )
}