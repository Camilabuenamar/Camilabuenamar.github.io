import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import { HashRouter, Route , Switch} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar.js'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path= "/" component={Home}/>
        </Switch>
        <Navbar />
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
