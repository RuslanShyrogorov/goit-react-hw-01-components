import {
  friendItem,
  friendStatus,
  friendAvatar,
  friendName,
} from './FriendListItem.styled';

export function infoFriend({ avatar, name, isOnline }) {
  return (
    <friendItem>
      <friendStatus userOnline={isOnline}></friendStatus>
      <friendAvatar src={avatar} alt="User avatar" width="48" />
      <friendName>{name}</friendName>
    </friendItem>
  );
}
