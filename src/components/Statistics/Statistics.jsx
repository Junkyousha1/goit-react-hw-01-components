import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { title, stats } = props;

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function renderStats() {
    return stats.map(function (stat) {
      const backgroundColor = getRandomColor();
      const listItemStyle = {
        backgroundColor: backgroundColor,
      };
      return (
        <li key={stat.id} className={styles.item} style={listItemStyle}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      );
    });
  }

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statlist}>{renderStats()}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default Statistics;
