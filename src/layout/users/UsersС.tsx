import React from "react";
import {Styles} from "./Users_Styles";
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";
import userImage from "../../accets/img/imageUser.jpg"
import {AppStateType} from "../../redux/reduxStore";

class UsersC extends React.Component<UsersPagePropsType, AppStateType> {
  constructor(props: any) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    return (
      <div>
        {
          this.props.usersPage.users.map(u => <Styles.UserWrapper key={u.id}>
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
    )
  }
}

export default UsersC;