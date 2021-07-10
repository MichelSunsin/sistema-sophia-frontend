import { Link } from 'react-router-dom'

import { Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <div className="titleContainer">
        <h1 className="title">Sistema Sophia</h1>
      </div>
      <div className="linksContainer">
        <ul>
          <li className="active">
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/studentDetails">Cadastro de aluno</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Header
