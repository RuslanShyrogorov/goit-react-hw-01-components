import { Statistics } from './Statistics/Statistics';
import data from 'data.json';
// ======================================
import { Profile } from './Profile/Profile';
import user from 'user.json';
// ======================================
import { FriendList } from './FriendList/FriendList';
import friends from 'friends.json';
// ========================================
import transactions from 'transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile data={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
