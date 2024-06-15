import React, {MouseEventHandler} from "react";
import {Styles} from "./Users_Styles";
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";
import userImage from "../../accets/img/imageUser.jpg"
import {AppStateType} from "../../redux/reduxStore";

class Users extends React.Component<UsersPagePropsType, AppStateType> {
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

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return this.props.currentPage === p
              ? <Styles.SelectedPage
                key={`pagination-page-${p}`}
              >
                {p}</Styles.SelectedPage>
              : <Styles.Page key={`pagination-page-${p}`}
                             onClick={() => {
                               this.onPageChanged(p)
                             }}>{p}</Styles.Page>
          })}
        </div>
        <div>
          {
            this.props.usersPage.map(u => <Styles.UserWrapper key={u.id}>
                <Styles.PhotoAndButton>
                  <Styles.UserAvatar src={u.photos.small != null
                    ? u.photos.small
                    : userImage}/>
                  <div>
                    {
                      u.followed
                        ? <Styles.ButtonFollowUnfollow
                          onClick={() => this.props.unfollow(u.id)}>
                          Unfollow
                        </Styles.ButtonFollowUnfollow>
                        : <Styles.ButtonFollowUnfollow
                          onClick={() => this.props.follow(u.id)}>
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
}

export default Users;