import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import {Login} from './Login'
import {Hello} from './Hello'


const MyApplication = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/hello' component={Hello} />
        <Route path='/' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root'))


