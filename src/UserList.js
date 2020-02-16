import React from 'react'
import request from 'superagent'

export class UserList extends React.Component{
  constructor (props) {
    super(props)
    this.state = { member : []}
  }

  componentWillMount()
  {
    console.log('componentWillMount is called ' );
    this.api('listUser');

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

    return (
   <div class="container contact contact-index">
        <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
          <div class="container">
            <div class="navbar-brand"><a href="/" class="nav-link"> MyApp </a> </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item"><a href="/list" class="nav-link">MySQL list</a></li>
                <li class="nav-item"><a href="/slowLambda" class="nav-link">slowLambda</a></li>
                <li class="nav-item"><a href="/s3list" class="nav-link">S3 bucket</a></li>
              </ul>
            </div>
            <a href="/users/logout" class="btn ">Logout</a>
          </div>
        </nav>
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




