import React, {Component} from 'react';
import ReactTable from 'react-table';
import axios from '../../../axios';
import 'react-table/react-table.css';

class Cafes extends Component {
  constructor(){
    super();
    this.state = {
      cafes: [],
      columns: [
        {Header: 'Name', accessor: 'name'},
        {Header: 'Staff', accessor: 'staff', Cell: props => props.value.toFixed(2)},
        {Header: 'Food', accessor: 'food', Cell: props => props.value.toFixed(2)},
        {Header: 'Coffee', accessor: 'coffee', Cell: props => props.value.toFixed(2)},
        {Header: 'Atmosphere', accessor: 'atmosphere', Cell: props => props.value.toFixed(2)},
        {Header: 'Rating', accessor: 'rate', Cell: props => props.value.toFixed(2)},
        {Header: 'Visits', accessor: 'visits'}
      ]
    }
  }

  getCafes = () => {
    axios.get('/cafes.json')
    .then(res => { 
        let cafes = [];
        for(let key in res.data){
            cafes.push({
                ...res.data[key]
            })
        }
        this.setState({cafes:cafes})
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount = () => {
    this.getCafes();
  }

  getData = () => {
    if(this.state.cafes)
      return this.state.cafes;
    return [];
  }

  render() { 
    const { columns } = this.state;
    return (
    <div className='washed-blue mh1 pa1'>
      <p className='f4-ns f5'>I love good coffee & I am a great home barista</p>
      <p className='f4-ns f5'>I recommend my drip coffee & Colombia beans if you want to try!</p>
      <p className='f4-ns f5'>Also I rate each place where I drank great cup</p>
      <p className='f4-ns f5'>These are my favorite Tricity cafes
      <span className='f5-ns f6'> (rating from 1 to 5)</span></p>
      <ReactTable
        data={this.getData()}
        columns={columns}
        defaultPageSize={6}
      />  
    </div>
  )}
}

export default Cafes;