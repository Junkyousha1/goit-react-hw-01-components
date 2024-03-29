import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

function FriendList(props) {
  return (
    <ul className={styles.friendlist}>
      {props.friends.map(function (friend) {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );

  function FriendListItem(props) {
    return (
      <li className={styles.item}>
        <Circle isOnline={props.isOnline} />
        <img
          className={styles.avatar}
          src={props.avatar}
          alt={`${props.name}'s avatar`}
          width="48"
        />
        <p className={styles.name}>{props.name}</p>
      </li>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
