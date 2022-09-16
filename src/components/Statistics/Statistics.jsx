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
