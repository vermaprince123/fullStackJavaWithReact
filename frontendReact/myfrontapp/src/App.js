import React, { Component } from 'react';
import data from './componentApi/Routes';
import './App.css'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      getData:[],
      visible:false,
      name:'',
      email:'',
      age:'',
      number:'',
      changeData:''
    }
  }
  componentDidMount(){
    this.getDataOnConsole();
  }

  getDataOnConsole=()=>{
    data.getApi().then((Res)=>{
      this.setState({
        getData:Res.data
      })
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const postData={
      "name":event.target.name.value,
      "age":event.target.age.value,
      "email":event.target.email.value,
      "number":event.target.number.value,
    }
    data.postApi(postData).then((res)=>{
      this.getDataOnConsole();
    })
    document.getElementById('myForm').reset();
   
  }


  updateData=(e,key)=>{
    this.setState({visible:true})
    const dataForUpdate = {
      "name":key.name,
      "age":key.age,
      "email":key.email,
      "number":key.number,
    }
    this.setState({name:dataForUpdate.name, email:dataForUpdate.email, number:dataForUpdate.number, age:dataForUpdate.age})
   
  }


  updatedSubmit=(event)=>{
    event.preventDefault()
    const dataForUpdate={
      "name":this.state.name,
      "age":this.state.age,
      "email":this.state.email,
      "number":this.state.number,
    }
    let keyForUpdate = this.state.email;
    data.updateApi(keyForUpdate,dataForUpdate).then((res)=>{
      this.getDataOnConsole();
      this.setState({visible:false})
    })

  }

  deletData=(e,key)=>{
    data.deleteApi(key).then(res=>{
      this.getDataOnConsole();
    })
  }

  render() {
    return (
    <div>

<h1>Full stack sample app</h1>
      
      <form id='myForm' onSubmit={this.handleSubmit}>
        
      <label>Enter Name</label>
      <input type='text' required placeholder='Please enter name' name='name'/><br/>

      <label>Enter Age</label>
      <input  type='number' required placeholder='Please enter age' name='age'/><br/>

      <label>Enter Email</label>
      <input type='email' required placeholder='Please enter email' name='email'/><br/>

      <label>Enter Number</label>
      <input type='number' required placeholder='Please enter number' name='number'/><br/>

     <input type='submit'/>
      
      </form>



     
       
        {this.state.getData.map((res)=>{
          return(
          <table id='customers' key={res.email}>
             <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Number</th>
        </tr>
        <tr>
            <td>{res.name}</td>
            <td>{res.age}</td>
            <td>{res.email}</td>
            <td>{res.number}</td>
        </tr>
        <button onClick={(e)=>{
          let keyvalue = res;
          this.updateData(e,keyvalue)}} >update Button</button>
        <button
        className='button'
          onClick={(e)=>{
          let keyvalue = res.email;
          this.deletData(e,keyvalue)}}
          >delete Button</button>
          </table>)      
        })}
      

      {this.state.visible && <form onSubmit={this.updatedSubmit}>
      <label>Enter Name</label>
      <input type='text' required placeholder='Please enter name' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>

      <label>Enter Age</label>
      <input  type='number' required placeholder='Please enter age' value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>

      <label>Enter Email</label>
      <input type='email' required placeholder='Please enter email' disabled value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>

      <label>Enter Number</label>
      <input type='number' required placeholder='Please enter number' value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})}/>

      <button >Update Final Button</button>
      
  </form>}
     
      
    </div>)
  }
}

