import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import {Login} from './Login'
import {UserList} from './UserList'
import {ApplicationHeader} from './ApplicationHeader'


const MyApplication = () => (
  <Router>
  <div>
    <div>
      <Switch>
        <Route path='/user/list' component={UserList} />
        <Route path='/' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </div>
  </Router>
)



const ApplicationFooter = () => ( 
  <div>
    I am Header
  </div>
)

  console.log('index render function : ' + localStorage.getItem('token'))
ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root'))


