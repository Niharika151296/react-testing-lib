import React , {Component } from 'react';
import axios from 'axios';
import './listComponent.css';
import empFilter from '../../utilFunc/EmployeeFilter';
class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.state ={
          users:[],
          msg:false,
          uname:'',
          status:'Loading'
           }
      }
      
      componentDidMount(){
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response=>{
           this.setState({users:response.data.data,status:'Done'})
        })
    }

     welcome = () => {
        this.setState({msg:true})
    }

    //  showName = () => {
    //     console.log("clicked")
    // }

    handleChange = (e) => {
        this.setState({uname:e.target.value})
    }

 render(){
     let user;
     if(this.state.users.length>0)
     user = this.state.users.map(u=> (
        <div data-testid="listView" className="listView" key={u.id}>
          <div data-testid="nameList">Name: {u.employee_name}</div>
          <div>Salary: {u.employee_salary}</div>
          <div>Age: {u.employee_age}</div>
        </div>
     ))

    return(
        <>
            <button  data-testid="btn1" onClick={()=>this.welcome()}>Show Welcome Msg</button>
            <p data-testid="p1" className="welcome">{this.state.msg?"Welcome":" "}</p>
            <button data-testid="btn2"  disabled={!this.state.msg} onClick={()=>this.showName}>Show name</button>
            <br/>
            <input type="text" 
                aria-label="inputname" 
                value={this.state.uname} 
                onChange={(e)=>this.handleChange(e)}/>
            <p data-testid="inputPara">{this.state.uname}</p>
            <p data-testid="status">{this.state.status}</p>
            {this.state.users&&<div>{user}</div>}
        </>
    )

}
}


export default ListComponent