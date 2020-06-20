import React from 'react';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
  <div className="profile">
    <div className="profile__description">
      <img src={avatar} alt={name} className="profile__description__avatar" />
      <p className="profile__description__name">{name}</p>
      <p className="profile__description__tag">@{tag}</p>
      <p className="profile__description__location">{location}</p>
    </div>

    <ul className="profile__stats">
      <li className="profile__stats__item">
        <span className="profile__stats__item__label">Followers</span>
        <span className="profile__stats__item__quantity">{followers}</span>
      </li>
      <li className="profile__stats__item">
        <span className="profile__stats__item__label">Views</span>
        <span className="profile__stats__item__quantity">{views}</span>
      </li>
      <li className="profile__stats__item">
        <span className="profile__stats__item__label">Likes</span>
        <span className="profile__stats__item__quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
