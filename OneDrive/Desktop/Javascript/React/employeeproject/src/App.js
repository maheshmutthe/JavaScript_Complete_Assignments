import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <Employee />
      </div>
    );
  }
}

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    let urld = "https://localhost:44304/api/Employees"
    //fetch("http://localhost:63019/api/home")
    fetch(urld)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
  }

  render() {
    return (
      <div>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Gender</th>
              <th>Department</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Salary}</td>
                <td>{emp.Gender}</td>
                <td>{emp.Department}</td>
                {/*<td>{emp.annualSalary}</td>
                <td>{emp.dateOfBirth}</td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;



