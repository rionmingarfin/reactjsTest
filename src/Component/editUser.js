import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col } from 'reactstrap';
import '../Assets/button.css';
import swal from 'sweetalert';
import { getUsertid } from '../Publics/redux/actions/user';
import { EditUserId } from '../Publics/redux/actions/user';
//import Flex from './'
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            tmp: [],
            users : [],
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount = async() => {
        const id = this.props.match.params.id
       await this.props.dispatch(getUsertid(id))
       this.setState({
         users : this.props.user
       })
      }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
    changeHandle = (e) => {
        // console.log(e.target.value)
        const userStatus = this.state.users
        userStatus.status = e.target.value
        // console.log(userStatus)
        this.setState({ users: userStatus })

    }
    render() {
        const editUser = () => {
            let status = '';
            // console.log('masuk')
            // console.log("this state status",this.state.users.status)
            switch (this.state.users.status) {
                case 'Admin':
                    status = 1;
                    break;
                default:
                    status = 0;
            }
            this.state.tmp.push({
                status
            });
            edit()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log("this.state.tmp",this.state.tmp[0]);
        };
        let edit = async () => {
            await this.props.dispatch(EditUserId((this.state.tmp[0]), this.state.users.id))
                .then(() => {
                    swal({
                        title: "Success",
                        text: "Edit Successfully",
                        icon: "success",
                        button: "OK"
                    }).then(() => {
                        window.location.href = '/product';
                    })
                })
                .catch(() => {
                    swal({
                        title: "Failed",
                        text: "Edit Failed !!!",
                        icon: "warning",
                        buttons: "OK"
                    })
                })
        };    
    // console.log("idUser gaes",this.props.match.params.id)
    const {users} = this.state;
    let list = users.userList;
       list &&
            list.length > 0 &&
            list.map((item) => {
                return this.setState({
                    users: item
                });
            });
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <ModalHeader toggle={this.toggle}>
                        <b>Edit User</b>
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup row>
                        <Label sm={3} size="lg">
                            status
                        </Label>
                        <Col sm={9}>
                            {/* {console.log(this.state.users.status)} */}
                            <select value={this.state.users.status}
                             onChange={this.changeHandle}>
                                <option value='user'>User</option>
                                <option value='Admin'>Admin</option>
                            </select>
                        </Col>
                    </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <button class="buttonSave" onClick={editUser.bind(this)}>
                            SAVE
						</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(EditUser);