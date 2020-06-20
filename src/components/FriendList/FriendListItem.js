import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ listItem }) => (
  <>
    <span
      className={
        listItem.isOnline
          ? 'friend-list__item__status__online'
          : 'friend-list__item__status__offline'
      }
    ></span>
    <img
      className="friend-list__item__avatar"
      src={listItem.avatar}
      alt={listItem.name}
      width="48"
    />
    <p className="friend-list__item__name">{listItem.name}</p>
  </>
);

FriendListItem.propTypes = {
  listItem: PropTypes.shape({
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
