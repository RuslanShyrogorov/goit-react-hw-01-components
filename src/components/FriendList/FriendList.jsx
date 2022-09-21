import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
