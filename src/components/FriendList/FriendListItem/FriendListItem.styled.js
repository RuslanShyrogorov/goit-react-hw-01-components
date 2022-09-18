import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 15px;
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 4px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  border-radius: 50%;

  /* background-color: ${p => (p.userOnline ? 'green' : 'red')}; */
`;

export const FriendAvatar = styled.img`
  border-radius: 5px;
  margin-right: 15px;
`;

export const FriendName = styled.p``;
