import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 8500, increase: false, favorites: true, id: 1},
        {name: 'Alex L.', salary: 4800, increase: true, favorites: false, id: 2},
        {name: 'Carl W.', salary: 9100, increase: false, favorites: false, id: 3}
      ]
    }
    this.maxId = 4;
  }

  addItem = (name, salary) => {
      const newItem = {
        name,
        salary,
        increase: false,
        favorites: false,
        id: this.maxId++
      }
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      })
    }

    deleteItem = (id) => {
      this.setState(({data}) => {

        return {
          data: data.filter(item => item.id !== id)
        }
      })
  }

  onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          if (item.id === id) {
            return {...item, [prop]: !item[prop]}
          }
          return item;
        })
      }))
  }



  render() {
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      return (
        <div className="app">
          <AppInfo employees={employees} increased={increased}/>
      
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
            
          </div>
          <EmployeesList 
              data={this.state.data} 
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}/>

          <EmployeesAddForm onAdd={this.addItem}/>
        
        </div>
      );
    }
}

export default App;
