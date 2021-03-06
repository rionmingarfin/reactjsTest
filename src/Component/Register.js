import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { register } from '../Publics/redux/actions/user';
import '../Assets/login.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
 

  render() {
    const userAdd = () => {
      this.state.user.push({
        username: this.state.username,
        email:this.state.email,
        password: this.state.password
      });
      add()
      this.setState((prevState) => ({
        modal: !prevState.modal
      }))}
      let add = async () => {
      await this.props.dispatch(register(this.state.user[0]))
      .then (()=>{
        swal({
            title: "Register",
            text: "Register Success",
            icon: "success",
            button: "OK"
        }).then(() => {
            window.location.href = '/user/login';
          })
    })
    .catch(()=>{
      swal({
          title: "Register Failed",
          text: "Email is already taken !!!",
          icon: "warning",
          buttons: "OK"
      }).then(() => {
        window.location.href = '/user/register';
      })
  })
    };
      return (
        <Container className="box">
          <h2>Sign Up</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>username</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  id="exampleEmail"
                  placeholder="your name..."
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  id="exampleEmail"
                  placeholder="myemail@email.com"
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
                  placeholder="password..."
                />
              </FormGroup>
            </Col>
            <Button class="buttonSave" onClick={userAdd.bind(this)} style={{backgroundColor:'rgb(43, 195, 206)'}}>Sign Up</Button>
            <br />
            <span>Already registered <Link to="/user/login">go to login</Link></span>
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
export default connect(mapStateToProps) (Register);