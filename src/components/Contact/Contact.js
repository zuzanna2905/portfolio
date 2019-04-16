import React from 'react';
import axios from '../../axios';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      message: ''
    }
  }

  handleFormChange = (event) => {
    const {name, value} = event.target; 
    this.setState({[name]: value})
  }
  
  onSubmitMessage = (e) => {
    axios.post('/emails.json', {
      name: this.state.name, 
      email: this.state.email, 
      message: this.state.message, 
      date: new Date()
    })
  }

  render() {
    return (
      <form className="white b--dark-10 w-100 w-50-m w-40-l mt4 pa2 center">
        <fieldset id="send_message" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 pt4 mh0">Leave me a message</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
            <input 
                className="pa2 br2 b--white input-reset ba bg-transparent w-100" 
                type="email" 
                name="email"  
                id="email"
                onChange = {this.handleFormChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input 
                className="pa2 br2 b--white input-reset ba bg-transparent w-100" 
                type="text" 
                name="name"  
                id="name"
                onChange = {this.handleFormChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="message">Message</label>
            <textarea 
                className="b--black br2 b--white pa2 input-reset ba bg-transparent w-100"
                name="message"  
                id="message"
                onChange = {this.handleFormChange}
            />
          </div>
        </fieldset>
        <div className="">
          <input 
            id = "send_message"
            onClick={this.onSubmitMessage}
            className="b br2 ph3 b--white white pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Send"
          />
        </div>
      </form>
    )
  }
}

export default Contact;