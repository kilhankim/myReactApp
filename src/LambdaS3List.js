import React from 'react'
import request from 'superagent'
import {ApplicationHeader} from './ApplicationHeader'

export class LambdaS3List extends React.Component{
  constructor (props) {
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    console.log('LambdaS3List is called')
    super(props)
    this.state = { member : [], jump : ''}
  }

  componentWillMount()
  {
    console.log('componentWillMount is called ' );
    this.api('listUser');

  }


  api(command) {
    console.log(command)
    //console.log(this.props.store.getState())
    request.get('/user/'+command)
    .query({
      email : this.state.email,
      password : this.state.password
    })
    .end((err, res) => {
      if(err) return

      console.log("list .js result -----------------");
      console.log('res : ' + res);
      console.log("UserList.js result -----------------");
      console.log('res : ' + JSON.stringify(res.body));
     

      if(res.body.length>0)
      {
        console.log('res : ' + JSON.stringify(res.body));
        this.setState({member : res.body})
        console.log(JSON.stringify(this.state))
      }
    })
  }



  render() {

    if(this.state.jump){
      console.log(this.state)

      return <Redirect to={this.state.jump} />
    }

    return (
   <div class="container contact contact-index">
    <ApplicationHeader />
    <button class="btn btn-success" data-toggle="modal" data-target="#myModalAdd" onClick={e => this.api('listUser')}> LIST </button>
    <br />
    <table class="table table-striped" id="mytable">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>

	   {this.state.member.map((member, i) => {
		return (
			 <tr>
				 <td> {member.id} </td>
				 <td> {member.name} </td>
				 <td> {member.title} </td> 
				 <td> {member.address} </td>
			 </tr>

	               );
	    })}

        </tbody>
    </table>
    </div>
    )
  }

}




