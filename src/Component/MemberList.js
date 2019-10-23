import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Assets/UserList.css';

import { getUser } from '../Publics/redux/actions/user';

class Member extends Component {
    state = {
        index: '',
        users: [],
    };
    componentDidMount = async () => {
        await this.props.dispatch(getUser());
        this.setState({
            users: this.props.user,
        });
    };

    render() {
        // console.log("this state users",this.state.users)
        const { users } = this.state;
        const list = users.userList;
        console.log(list);
        return (
            <div>
                <div className="table-div"></div>
                <h3 className="list-book">List All Users</h3>
                <table class="darkTable">
                    <thead>
                        <tr>
                            <th >No</th>
                            <th>usernname</th>
                            <th>email</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {list &&
                        list.length > 0 &&
                        list.map((item, index) => {
                            // console.log(item.id)
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                        <td><a style={{ textDecoration: 'none', color: 'black' }} href={`/book/${item.id}`}>{item.username}</a></td>
                                        <td>{item.email}</td>
                                        <td>{item.status}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Link to={`/user/member/${item.id}/edit`}>
                                                <button className='button1'>Edit</button>
                                            </Link>
                                            {/* <a href='/books/'>
                                                <button className='button2' onClick={() => this.deleteBook(item.bookid)}>Delete</button>
                                            </a> */}
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                </table>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Member);