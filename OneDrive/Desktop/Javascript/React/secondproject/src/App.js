import logo from './logo.svg';
import './App.css';

import React from 'react';
class App extends React.Component {
 
   render(){
        return (
           <div>
              <Header/>
  <Employee name="Vidyanidhi" salary="50000" dept="Placement" head="Pooja" />
              </div>
        );   
    }
    }
class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>Header</h1>
          </div>
       );
    }
  }
  function Employee(data) {
    return (
     <div><p>Name : {data.name}</p>
      <p>Salary : {data.salary}</p>
      <Department dept={data.dept} head={data.head}/>
      </div>
      );
    }
const Department=(deptInfo)=>{
        return <div><p>Dept Name is : <b>{deptInfo.dept}</b></p>
          <p>Dept Head is : <b>{deptInfo.head}</b></p>
          </div>;
      }
    export default App;
     
  