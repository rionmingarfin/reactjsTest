import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { login } from '../Publics/redux/actions/user';
import '../Assets/login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }


  render() {
    const userAdd = () => {
      this.state.user.push({
        username:this.state.username,
        password: this.state.password
      }); 
      add()
      this.setState((prevState) => ({
        modal: !prevState.modal
      }))}
      let add = async () => {
      await this.props.dispatch(login(this.state.user[0]))
     .then (()=>{
      swal({
          title: "Login",
          text: "Login Success",
          icon: "success",
          button: "OK"
      }).then(() => {
          window.location.href = '/book';
        })
  })
  .catch(()=>{
      swal({
          title: "Login Failed",
          text: "username Or Password Wrong !!!",
          icon: "warning",
          buttons: "OK"
      })
  })
}

    return (
      <Container className="box">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
              <FormGroup>
                <Label>username</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  id="exampleusername"
                  placeholder="your name..."
                />
              </FormGroup>
            </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                id="examplePassword"
                placeholder="*******"
              />
            </FormGroup>
          </Col>
          <Button class="buttonSave" onClick={userAdd.bind(this)} style={{backgroundColor:'rgb(43, 195, 206)'}}>Sign In</Button>
          <br/>
          <span>Not register yet, <Link to="/user/register">register now</Link></span>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
      product: state.product
  };
};
export default connect(mapStateToProps) (Login);