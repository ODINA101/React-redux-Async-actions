import React, { Component } from 'react';
import './App.css';
import * as actions from './action';


class App extends Component {
constructor(props) { 
  super(props);
   actions.fetchUsers(this.props.store);
 this.props.store.subscribe(() => {
this.setState(this.props.store.getState());
console.log(this.props.store.getState())
 }) 
}

 
  render() {
 
 
 
 
    if (this.state) {

    return (
       
<div> 
  <ul   >
    {
     this.state.data.map((singleUser)=> {
       return (<li><img   src={singleUser.avatar}  />{singleUser.first_name}</li>)
     })
    }
  </ul>
</div>
  
  
      );
    }else{
    return (
      <div className="App">
        
        <h1>loading</h1>

      </div>
    );
  }
}
}

 


export default App;
