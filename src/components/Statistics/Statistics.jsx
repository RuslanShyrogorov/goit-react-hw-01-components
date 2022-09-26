import PropTypes from 'prop-types';
import { StatList } from './StatList/StatList';
import { Title } from './StatList/StatList.styled';
import { Section } from './Statistics.styled';

export function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList stats={stats} />
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
