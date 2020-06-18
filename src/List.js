import React from 'react';
import axios from 'axios';
import  './text.scss'
class TrData extends React.Component{
    render(){
      return (
        this.props.users.map((user,i)=>{
            return (
                <tr key={user.id} className="text-center">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.sex}</td>
                </tr>
            )       
        })
      )
    }
  }

  class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false
        }
  }
  componentDidMount(){
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    .then((response) =>{
        this.setState({
        users:response.data,
        isLoaded:true
      });
    })
    .catch((error)=> {
      this.setState({
        isLoaded:false,
        error:error
      })
    })
  }
  render() {
    if(!this.state.isLoaded){
      return <div className="bg">Loading</div>
    }else{
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">姓名</th>
            <th className="text-center">年龄</th>
            <th className="text-center">性别</th>
          </tr>
        </thead>
      <tbody>
         <TrData users={this.state.users}/>
      </tbody>
      </table>
    )  
  }
}
}

export default List;