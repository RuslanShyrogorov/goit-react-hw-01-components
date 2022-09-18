import {
  Table,
  TableHead,
  HeadRow,
  HeadColumn,
  TableBody,
  BodyRow,
  BodyRowCell,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <HeadRow>
          <HeadColumn>Type</HeadColumn>
          <HeadColumn>Amount</HeadColumn>
          <HeadColumn>Currency</HeadColumn>
        </HeadRow>
      </TableHead>
      <TableBody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <BodyRow key={id}>
              <BodyRowCell>{type}</BodyRowCell>
              <BodyRowCell>{amount}</BodyRowCell>
              <BodyRowCell>{currency}</BodyRowCell>
            </BodyRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
