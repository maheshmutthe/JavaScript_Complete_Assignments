import logo from './logo.svg';
import './App.css';

import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        <Employee Id="101" Name="Vita" Location="Mumbai" salary="50000" BasicSalary="25000" HRA="15000" SpecialAllowance="10000" updatedSalary="50000"> </Employee>
      </div>
    );
  }
}
class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = { updatedSalary: null }
  }

  getUpdatedSalary = (salary) => {
    console.log(salary)
    this.setState({ updatedSalary: salary });
    console.log(this.state)
  }

  render() {
    return <div>
      <h1>Employee Component...</h1>
      <p>        <label>Id : <b>{this.props.Id}</b></label>
      </p>
      <p>        <label>Name : <b>{this.props.Name}</b></label>
      </p>
      <p>        <label>Location : <b>{this.props.Location}</b></label>
      </p>
      <p>        <label>Salary : <b>{this.props.salary}</b></label>
      </p>
      <p>        <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
        {console.log(this.state.updatedSalary)}
      </p>
      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}
        onSalaryChanged={this.getUpdatedSalary}></Salary>
    </div>
  }
}
class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance
    };
  }
  updateSalary = () => {
    let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
    this.props.onSalaryChanged(salary)
  }
  render() {
    return <div>
      <h1>Salary Details...</h1>
      <p>
        <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary" /></label>
      </p>
      <p>
        <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" /></label>
      </p>
      <p>
        <label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" /></label>
      </p>
      <button onClick={this.updateSalary}>Update</button>
    </div>
  }
}




export default App;
