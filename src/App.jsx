import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from 'components/header'
import Home from './pages/home'
import StudentDetails from './pages/studentDetails'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/studentDetails" component={StudentDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
