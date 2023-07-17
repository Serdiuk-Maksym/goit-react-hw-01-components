import friends from 'components/friends.json';

const FriendList = () => {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <li class="item" key={item.id}>
          <span class="status">{item.isOnline}</span>
          <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
          <p class="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
