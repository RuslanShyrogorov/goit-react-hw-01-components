import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsLabel, StatsQuntity } from './Stats.styled';

export function Stats({ stats }) {
  const keys = Object.keys(stats);
  return (
    <StatsList>
      {keys.map((key, index) => {
        return (
          <StatsItem key={index}>
            <StatsLabel>{key}</StatsLabel>
            <StatsQuntity>{stats[key]}</StatsQuntity>
          </StatsItem>
        );
      })}
    </StatsList>
  );
}

Stats.propTypes = {
  stats: PropTypes.exact({}),
};
