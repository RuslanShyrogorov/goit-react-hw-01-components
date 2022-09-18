import { FriendCards } from './FriendList.styled';
import { InfoFriend } from './FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FriendCards>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <InfoFriend
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendCards>
  );
}
