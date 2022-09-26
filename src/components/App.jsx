import { Statistics } from './Statistics/Statistics';
import data from 'database/data.json';
// ======================================
import { Profile } from './Profile/Profile';
import user from 'database/user.json';
// ======================================
import { FriendList } from './FriendList/FriendList';
import friends from 'database/friends.json';
// ========================================
import transactions from 'database/transactions.json';
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
