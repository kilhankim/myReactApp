import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import {Login} from './Login'
import {UserList} from './UserList'
import {LambdaS3List} from './LambdaS3List'
import {ApplicationHeader} from './ApplicationHeader'






const MyApplication = () => (
  <Router>
  <div>
    <div>
      <Switch>
        <Route path='/user/list' component={UserList} />
        <Route path='/' component={Login} />
        <Route path='/lambda/s3' component={LambdaS3List} />
        <Route component={Login} />
      </Switch>
    </div>
  </div>
  </Router>
)


ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root'))


