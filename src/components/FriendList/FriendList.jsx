import { FriendCards } from './FriendList.styled';
import { infoFriend } from './FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FriendCards>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <infoFriend
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
