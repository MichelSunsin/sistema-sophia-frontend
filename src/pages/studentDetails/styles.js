import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.blue};
  width: 50%;
  margin: 10px auto;
  border-radius: 5px;

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
  background-color: ${({ theme }) => theme.colors.nude};
  padding: 25px;
  flex: 1;
  flex-direction: column;

  .form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;

    > input:not([type='date']),
    select {
      padding: 5px;
    }

    > input[type='date'] {
      padding: 3px;
    }

    > span {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`
export const SideContent = styled.div`
  border-radius: 5px;
  border-bottom-right-radius: 5px;

  li {
    background-color: ${({ theme }) => theme.colors.darkNude};
    padding: 10px;
    color: white;
    list-style: none;

    &.active {
      color: ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.nude};
    }
  }
`
