import PropTypes from 'prop-types';
import { StatItem } from '../StatItem/StatItem';
import { List } from './StatList.styled';

export function StatList({ stats }) {
  return (
    <List>
      {stats.map(stat => (
        <StatItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </List>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
