import React from 'react'
import request from 'superagent'

export class UserList extends React.Component{
  constructor (props) {
    super(props)
    this.state = { email : '', password : '', jump : ''}
  }


  api(command) {
    console.log(command)
    request.get('/users/'+command)
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
      console.log('res : ' + JSON.stringify(res.body.result));
     

      if(res.body.result)
      {
        console.log('res : ' + JSON.stringify(res.body.result));
        this.setState({jump : '/userList'})
      }
    })
  }



  render() {

    return (
   <div class="container contact contact-index">
    <button class="btn btn-success" data-toggle="modal" data-target="#myModalAdd" onClick={e => this.api('list')}> LIST </button>
    <br />
    <table class="table table-striped" id="mytable">
        <thead>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1 </td>
                <td> kilhan </td>
                <td> TAM </td>
                <td> Seoul </td> 
            </tr>
        </tbody>
    </table>
    </div>
    )
  }

}
