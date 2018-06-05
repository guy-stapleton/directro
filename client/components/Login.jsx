import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form id="login">
        <label>Username<br/>
          <input type="text" name="username"/>
        </label><br/>
        <label>Password<br/>
          <input type="password" name="password" />
        </label><br/>
        <input type="submit" value="sign in" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Login)
