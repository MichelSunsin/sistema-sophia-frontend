import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  width: 50%;
  padding: 25px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.nude};

  .header {
    margin-bottom: 15px;
  }
`

export const Content = styled.div`
  & > table {
    width: 100%;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-collapse: collapse;

    th,
    td {
      padding: 5px;

      &.action-edit,
      &.action-remove {
        cursor: pointer;

        :hover {
          color: white;
          background-color: ${({ theme }) => theme.colors.lightBlue};
        }
      }
    }

    th {
      font-weight: initial;
      color: white;
      background-color: ${({ theme }) => theme.colors.blue};
    }

    tbody > tr:nth-child(odd) {
      background-color: lightgray;
    }
  }
`
