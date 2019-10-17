import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Assets/listbook.css';
import { Link } from 'react-router-dom';
// import Add from './add'

import { getProduct} from '../Publics/redux/actions/product';

class Product extends Component {
  state = {
    index: '',
  };
  componentDidMount = () => {
    this.props.dispatch(getProduct())
  }

  render() {
    //  console.log("product",JSON.stringify(this.props.product.productList))
    return (
      <div>
        {/* <Add /> */}
        <div className ="list-item">
          <ul>
            {this.props.product.productList.map((item, index) => {
                // console.log(item.id)
                return (
                  <Link to={`/product/${item.id}`} key={index}>
                    <div className="item" id="items" idProduct={item.id}>
                      <img src={item.image} alt="gambar" />
                      <div>
                        <p style={{fontSize : '14px',fontWeight : 'bold',color: 'black'}}>{(item.name)}</p>
                        <p style={{fontSize : '14px',fontWeight : 'bold',color: 'black'}}>{(item.price)}</p>
                        <p style={{fontSize : '14px',fontWeight : 'bold',color: 'black'}}>{(item.stok)}</p>
                      </div>
                    </div>
                  </Link>
                )
              }
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(Product);
