import PropTypes from 'prop-types';

import { Item, Label, Percentage } from './StatItem.styled';

export function StatItem({ label, percentage }) {
  return (
    <Item>
      <Label>{`${label} `}</Label>
      <Percentage>{`${percentage} %`}</Percentage>
    </Item>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
