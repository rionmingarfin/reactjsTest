import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import '../Assets/button.css';
import { postProduct } from '../Publics/redux/actions/product';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			product: [],
			dropdownOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.toggleDrop = this.toggleDrop.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	toggleDrop() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	onChangeFile = (e) => {
		console.log(e.target.files[0])
		this.setState({
			file: e.target.files[0],
		})
	}

	render() {
		const productAdd = () => {
			const dataFile = new FormData()
			dataFile.append('image', this.state.file)
			dataFile.append('prdNm', this.state.prdNm)
			dataFile.append('selPrc', this.state.selPrc)
			dataFile.append('stok', this.state.stok)
			dataFile.append('description', this.state.description)

			add(dataFile)
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
			console.log(this.state.product);
		};
		let add = async (data) => {
			await this.props.dispatch(postProduct(data)).then(() => {
				swal({
					title: "Succes",
					text: "Add Success !!",
					icon: "success",
					button: "OK"
				}).then(() => {
					window.location.href = '/product';
				})
			})
				.catch(() => {
					swal({
						title: "Add Failed",
						text: "product Is Avalaible",
						icon: "warning",
						buttons: "OK"
					}).then(() => {
						window.location.href = '/product';
					})
				})
		};
		return (
			<div>
				<button class="button" onClick={this.toggle}>
					ADD product
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>Add Data</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
                                prdNm
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ prdNm: e.target.value })}
										id="title"
										placeholder="Title..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									selPrc
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ selPrc: e.target.value })}
										id="title"
										placeholder="selPrc..."
										bsSize="lg"
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
							<FormGroup row>
								<Label sm={3} size="lg">
									stok
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ stok: e.target.value })}
										id="title"
										placeholder="stok..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Description
								</Label>
								<Col sm={9}>
									<Input
										type="textarea"
										name="desc"
										onChange={(e) => this.setState({ description: e.target.value })}
										id="desc"
										placeholder="Desciption..."
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<button class="buttonSave" onClick={productAdd.bind(this)}>
							SAVE
						</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		product: state.product
	};
};
export default connect(mapStateToProps)(Add);
