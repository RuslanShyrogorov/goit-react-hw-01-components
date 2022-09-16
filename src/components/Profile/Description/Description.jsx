import PropTypes from 'prop-types';
import { Wrapper, Image, Name, Tag, Location } from './Description.styled';

export function Description({ username, tag, location, avatar }) {
  return (
    <Wrapper>
      <Image src={avatar} alt={`${username} avatar`} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Wrapper>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
