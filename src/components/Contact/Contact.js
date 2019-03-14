import React from 'react';

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
  
  onSubmitMessage = () => {

  }

  render() {
    return (
      <div className="black b--dark-10 w-100 w-50-m w-40-l mt4 pa2 center">
        <fieldset id="send_message" className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 pt4 mh0">Leave me a message</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
            <input 
                className="pa2 br2 input-reset ba bg-transparent w-100" 
                type="email" 
                name="email"  
                id="email"
                onChange = {this.handleFormChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input 
                className="pa2 br2 input-reset ba bg-transparent w-100" 
                type="text" 
                name="name"  
                id="name"
                onChange = {this.handleFormChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="message">Message</label>
            <textarea 
                className="b--black br2 pa2 input-reset ba bg-transparent w-100"
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
            className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Send"
          />
        </div>
      </div>
    )
  }
}

export default Contact;