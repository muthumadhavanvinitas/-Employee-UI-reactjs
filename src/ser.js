import React,{Component} from 'react';
import { Form,Button,Segment,Grid,Image,Advertisement,Rating,Card, Feed} from 'semantic-ui-react'
import { Link } from 'react-router';
 
 class Login extends React.Component {
  state={
    data: {
      password: '',
      password: ''
    },
    loading: false,
    errors: {}
  }
  onChange = e =>
  this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value }
  })
render(){
    const {  data } = this.state;
    return(
      <div>
      <Form >
       
      
       <label htmlfor="email">Email</label>
       <input 
        type="email"
        id="email"
        name="email"
        placeholder="example@example.com"
        value={data.email}/>
        <label htmlfor="password">Password</label>
       <input 
        type="password"
        id="password"
        name="password"
        placeholder="Make  it secure"
        value={data.password}/>
        
        
         <Button.Group widths='20'>
        <Button primary>Login</Button>
        <Link to='/'><Button secondary>Register</Button></Link>
        </Button.Group>

        </Form>
        
       
      </div>
      )
  }

 } 
 export default Login