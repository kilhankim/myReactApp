import React from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'




import {ApplicationHeader} from './ApplicationHeader'
import { createStore } from 'redux'


// 액션 타입을 정의해줍니다.
const STORE_SESSION  = 'STORE_SESSION'

// 액션 객체를 만들어주는 액션 생성 함수
const loginAction= (emailId, jwtToken) => ({ type: STORE_SESSION, email : emailId , jwtToken : jwtToken});

const initialState = {
 loginState : false ,
 emailId : '',
 token : ''
};

/*
   이것은 리듀서 함수입니다.
   state 와 action 을 파라미터로 받아옵니다.
   그리고 그에 따라 다음 상태를 정의 한 다음에 반환해줍니다.
*/

// 여기에 state = initialState 는, 파라미터의 기본값을 지정해줍니다.
const sessionSave  = (state=initialState , action) => {
  console.log(action);
  console.log(action.type);

  switch(action.type) {
    case STORE_SESSION:
      return {
        loginState : true,
        emailId : action.email, 
        token : action.jwtToken
      };
    default:
      return state;
  }
  console.log(this.props.store.getState())
}

// 스토어를 만들 땐 createStore 에 리듀서 함수를 넣어서 호출합니다.
const store = createStore(sessionSave);


export class Login extends React.Component{
  constructor (props) {
    super(props)
    this.state = { email : '', password : '', jump : ''}
  }

  api(command) {
    console.log(command)
    request.get('/user/'+command)
    .query({ 
      email : this.state.email,
      password : this.state.password
    })
    .end((err, res) => {
      if(err) return
      

      localStorage.setItem('login',res.body.result)
      localStorage.setItem('token',res.body.token)

      if(res.body.result)
      {
        console.log('res : ' + JSON.stringify(res.body.result));
        this.setState({jump : '/user/list'})
        store.dispatch(loginAction(this.state.email, res.body.token));
      }
    })
  }

  render () {
    if(this.state.jump){
      console.log(this.state)

      return <Redirect to={this.state.jump} />
    }


    const changed = (name, e) => this.setState({[name]: e.target.value})
    return (

	<div class="row mt-5">
	  <div class="col-md-6 m-auto">
	    <div class="card card-body">
	      <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
		<div class="form-group">
		  <label for="email">Email</label>
		  <input
		    value={this.state.email}
		    type="email"
		    id="email"
		    name="email"
		    class="form-control"
		    placeholder="Enter Email"
		    onChange={e => changed('email', e)}
		  />
		</div>
		<div class="form-group">
		  <label for="password">Password</label>
		  <input
		    value={this.state.password}
		    type="password"
		    id="password"
		    name="password"
		    class="form-control"
		    placeholder="Enter Password"
		    onChange={e => changed('password', e)}
		  />
		</div>
		<button type="submit" class="btn btn-primary btn-block" onClick={e => this.api('login')} >Login</button>
	      <p class="lead mt-4">
		No Account? <a href="/users/register">Register</a>
	      </p>
	    </div>
	  </div>
	</div>

    )
  }

}
