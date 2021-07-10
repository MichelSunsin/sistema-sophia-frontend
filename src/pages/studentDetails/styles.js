import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  width: 50%;
  padding: 25px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.nude};

  ${(props) =>
    props.id &&
    `
      border-top-right-radius: initial;
      border-bottom-right-radius: initial;
    `}

  .header {
    margin-bottom: 15px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;

    > input {
      padding: 5px;
    }

    > span {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`
