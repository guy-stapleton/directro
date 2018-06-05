import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Login from './Login'

class App extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Directo</h1>
          <h2>Buy Tickets for the Latest Movies</h2>
          <Link to={'/login'}>Log in</Link>
          <Route exact path="/login" component={Login}/>
        </div>
    </Router>
    )
  }
}

export default App
