import styled from 'styled-components';

// export const Item = styled.li`
//   display: flex;
//   flex-direction: column;
// `;
export const Label = styled.span`
  margin-bottom: 3px;
`;
export const Percentage = styled.span``;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  /* ${props => {
    switch (props.label) {
      case '.docx':
        return `
          background-color: black;
        `;
      default:
        return `
          background-color: white;
        `;
    }
  }} */
`;
