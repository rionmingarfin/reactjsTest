import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import '../Assets/button.css';
import swal from 'sweetalert';
import { getProductid } from '../Publics/redux/actions/product';
import { editProduct } from '../Publics/redux/actions/product';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            tmp: [],
            products : []
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount = async() => {
        const idproducts = this.props.match.params.id
       await this.props.dispatch(getProductid(idproducts))
       this.setState({
         products : this.props.product
       })
      }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChangeFile = (e) => {
		console.log(e.target.files[0])
		this.setState({
			file: e.target.files[0],
		})
	}
    changeHandle = (e) => {
        const name = e.currentTarget.name
        const val = e.currentTarget.value
        this.state.products[name] = val
        
        this.setState({ products: this.state.products })

    }
    render() {
        const editproducts = () => {
            this.state.tmp.push({
                name: this.state.products.name,
                price: this.state.products.price,
                stok: this.state.products.stok,
                description: this.state.products.description,
                image: this.state.products.image,
            });
            edit()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log("tmp",this.state.tmp[0]);
        };
        let edit = async () => {
            await this.props.dispatch(editProduct((this.state.tmp[0]), this.state.products.id_product))
                .then(() => {
                    swal({
                        title: "Success",
                        text: "Edit Successfully",
                        icon: "success",
                        button: "OK"
                    }).then(() => {
                        // window.location.href = '/product';
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
    // console.log("idproduct,gaes",this.props.product.productList.name)
    const {products} = this.state;
    let list = products.productList;
       list &&
            list.length > 0 &&
            list.map((item) => {
                return this.setState({
                    products: item
                });
            });
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <ModalHeader toggle={this.toggle}>
                        <b>Product Data</b>
                    </ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup row >
                                <Label sm={3} size="lg">
                                    Name
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="title"
                                        placeholder="Title..."
                                        bsSize="lg"
                                        value={this.state.products.name}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={3} size="lg">
                                    Price
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="price"
                                        id="title"
                                        placeholder="Author..."
                                        bsSize="lg"
                                        value={this.state.products.price}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={3} size="lg">
                                    Stok
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="stok"
                                        id="title"
                                        placeholder="Author..."
                                        bsSize="lg"
                                        value={this.state.products.stok}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={3} size="lg">
                                    Description
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="title"
                                        placeholder="Desc..."
                                        bsSize="lg"
                                        value={this.state.products.description}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
								<Label sm={3} size="lg">
									Image
								</Label>
								<Col sm={9}>
									<Input
										type="file"
                                        name="title"
										onChange={this.onChangeFile}
										id="title"
										placeholder="Image..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button class="buttonSave" onClick={editproducts.bind(this)}>
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
        product: state.product
    };
};
export default connect(mapStateToProps)(Edit);