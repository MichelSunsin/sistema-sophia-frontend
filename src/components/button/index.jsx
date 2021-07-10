import { ButtonWrapper } from './styles'

const Button = ({ type, children }) => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>
}

export default Button
