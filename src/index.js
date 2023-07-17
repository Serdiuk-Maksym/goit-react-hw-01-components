import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile';
import user from 'components/user.json';
import Statistics from 'components/Statistics';
import data from 'components/data.json';
import FriendList from 'components/FriendList';
import friends from 'components/friends.json';
import TransactionHistory from 'components/TransactionHistory';
import transactions from 'components/transactions.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
