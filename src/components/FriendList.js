import React from 'react';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="friend-list__item" key={id}>
        {/* {isOnline && <span className="friend-list__item__status"></span>} */}
        <span
          className={
            isOnline
              ? 'friend-list__item__status__online'
              : 'friend-list__item__status__offline'
          }
        ></span>
        <img
          className="friend-list__item__avatar"
          src={avatar}
          alt={name}
          width="48"
        />
        <p className="friend-list__item__name">{name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
