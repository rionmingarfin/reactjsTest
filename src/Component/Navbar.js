import React, { Component } from 'react';
import '../Assets/navbar.css';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      username : false,
      user : ''
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    // console.log("username",localStorage.username)
    // console.log("iduser",localStorage.id)
    // console.log("token",localStorage.jwToken)
    // console.log("token",localStorage.status)
    return ( 
      <div>
      <div className="titleBar">
        <div style={{ paddingLeft: '100px', paddingTop: '10px' }}>
          <span style={{ color: 'white', fontSize: '30pt', fontWeight: 'bolder' }}>ELEVENIA</span>
      
          {localStorage.username != null ?
            (<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ float: 'right', marginRight: '100px', marginTop: '8px' }}>
              <DropdownToggle style={{ backgroundColor: 'rgb(43, 195, 206)', border: 'none', fontWeight: 'bold', fontSize: '20pt' }}>
                Hi, {localStorage.username}
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/user/logout"><DropdownItem>Logout</DropdownItem></Link>
                {localStorage.status == 1 ?
                  (<Link to="/user/member"><DropdownItem>Member List</DropdownItem></Link>) : ('')}
                {localStorage.status == 1 ?
                  (<Link to={`/profile/${localStorage.id}`}><DropdownItem>profile</DropdownItem></Link>) : ('')}
              </DropdownMenu>
            </ButtonDropdown>) :
            (<Link to="/user/login"><span style={{ color: 'white', fontSize: '20pt', fontWeight: 'bolder', float: 'right', marginRight: '100px', marginTop: '10px' }}>LOGIN</span></Link>)
          }
        </div>
      </div>
      </div>
    );
  }
}

export default Navbar;
