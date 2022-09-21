import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  Row,
  HeadColumn,
  TableBody,
  BodyRowCell,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <Row>
          <HeadColumn>Type</HeadColumn>
          <HeadColumn>Amount</HeadColumn>
          <HeadColumn>Currency</HeadColumn>
        </Row>
      </TableHead>
      <TableBody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <Row key={id}>
              <BodyRowCell>{type}</BodyRowCell>
              <BodyRowCell>{amount}</BodyRowCell>
              <BodyRowCell>{currency}</BodyRowCell>
            </Row>
          );
        })}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
