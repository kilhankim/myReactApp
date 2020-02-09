import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import {Login} from './Login'

console.log('testtesttesttest')

// DOM의 내용을 메인 컴포넌트로 변경합니다.
ReactDOM.render(
  <Login />,
  document.getElementById('root'))
