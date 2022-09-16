// import { Statistics } from './Statistics/Statistics';
// import data from 'data.json';
// ======================================
// import { Profile } from './Profile/Profile';
// import user from 'user.json';
// ======================================
import { FriendList } from './FriendList/FriendList';
import friends from 'friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Profile data={user} /> */}
      {/* <Statistics stats={data} title="Upload stats" /> */}
      <FriendList friends={friends} />
    </div>
  );
};
