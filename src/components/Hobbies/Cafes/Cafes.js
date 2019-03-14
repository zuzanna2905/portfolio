import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Cafes extends Component {
  constructor(){
    super();
    this.state = {
      cafes: []
    }
  }

  getCafes = () => {
    fetch('http://localhost:3001/cafes', {
      method: 'get',
      headers: {'Content-Type' : 'application/json'}
    })
    .then(response => response.json())
    .then(cafes=> {
      this.setState({cafes:cafes})
    })
  }

  componentDidMount = () => {
    this.getCafes();
  }

  getColumns = () => {
    if(this.state.cafes[0]){
    let keys = this.state.cafes.map(o => {
      return Object.keys(o).map(a => a)
    })
    keys = keys[0];
    let columns = keys.map(k => {
      return {
        Header: k.toUpperCase(),
        accessor: k
      }
    })
    return columns;
    }
    return [{Header: 'Cafe', accesor: 'cafe'}];
  }

  getData = () => {
    if(this.state.cafes)
      return this.state.cafes;
    return [];
  }

  render() { 
    return (
    <div className='washed-blue ma1 pa1'>
      <p className='f4-ns f5'>I love good coffee and I rate each place where I drank great one</p>
      <p className='f4-ns f5'>There are my best Tricity cafes</p>
      <p className='f5-ns f6'>*Rating from 1 to 5</p>
      <ReactTable
        data={this.getData()}
        columns={this.getColumns()}
        defaultPageSize={6}
      />  
    </div>
  )}
}

export default Cafes;