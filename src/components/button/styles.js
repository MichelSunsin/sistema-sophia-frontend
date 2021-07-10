import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  padding: 10px;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`
