import PropTypes from 'prop-types';
import { UserCard } from './Profile.styled';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';

export function Profile({ data: { username, tag, location, avatar, stats } }) {
  console.log(username);
  return (
    <UserCard>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </UserCard>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({}),
};
