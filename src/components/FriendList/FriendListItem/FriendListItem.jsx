import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export function InfoFriend({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus userOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}
