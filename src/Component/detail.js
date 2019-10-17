import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../Assets/detailbook.css';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar'

import {getProductid} from '../Publics/redux/actions/product';


class Detail extends Component {
    state = {
        index: '',
      };
      componentDidMount = async() => {
       await this.props.dispatch(getProductid(this.props.match.params.id))
      }

  render() {
    //   console.log("idproduct",this.props.match.params.id)
    //   console.log("data",this.props.product.productList)
    return (
      <div>  
          {this.props.product.productList.map(item =>  {
                      return (
                        //  <div className="book-detail">
                        //       <div>
                        //          <ul>
                        //             <li><Link to="/product" className="back">BACK</Link></li>
                        //          </ul>
                        //             <img className='Gambar1' src={item.image} alt="gambar" />
                        //       </div>
                        //       <div className="content">
                        //             <p className='title'>{(item.name)}</p>
                        //             <p>{(item.description)}</p>
                        //             <p>stok :{(item.stok)}</p>
                        //             <p>price :{(item.price)}</p>
                        //       </div>
                        //   </div>
                        <div className="container-fluid">
      <div className="row">
          <div className="col-9">
            <div className="card" style={{ width: "100%", height: "100%" }}>
              <div
                className="row"
                style={{ marginLeft: 8, marginTop: 8, marginBottom: 8 }}
              >
                <div className="col-4">
                  <div className="row" style={{ marginBottom: 8 }}>
                    <div className="col-sm">
                      <img
                        style={{ width: "100%" }}
                        src={item.image}
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src={item.image}
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src={item.image}
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src="https://s0.bukalapak.com/img/0854396813/thumb/pompa_galon_air_electric_recharge___dispenser_air_electric.jpg.webp"
                      />
                    </div>
                    <div className="col-sm">
                      <img
                      alt="..."
                        style={{ width: "100%" }}
                        src="https://s0.bukalapak.com/img/5441961404/thumb/pompa_galon_air_electric_recharge___dispenser_air_electric.jpg.webp"
                      />
                    </div>
                  </div>
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                  <div className="row" style={{ marginTop: 10 }}>
                    <div className="col-4" style={{ paddingRight: 0 }}>
                      <img
                      alt="..."
                        src="https://s1.bukalapak.com/qr/product/1ek5ioh"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-8">
                      <text style={{ fontSize: 12 }}>
                        <b>Kode QR untuk transaksi di aplikasi elvenia</b>{" "}
                        Temukan fitur scan kode QR di kolom pencarian aplikasi
                        elvenia. 
                      </text>
                    </div>
                  </div>
                </div>
                <div className="col-8" style={{ marginTop: "1%" }}>
                  <p className="font-weight-bold" style={{ fontSize: 20 }}>
                  {item.name}
                  </p>
                  <p>harga : {item.price}</p>
                  <div className="dropdown-divider" />
                  <div className="row ml-3 mt-3 mb-3">
                    <input type="button" value="-" onClick={() => {}} />
                    <input style={{width:"50px"}} className="text-center" value={item.price} onChange={this.handleChange} type="text"/>
                    <input type="button" value="+" onClick={() => {}} />
                  </div>
                  <div className="col" style={{ paddingLeft: 0 }}>
                    <Link to='/payment'><button
                      type="button"
                      className="btn btn-success font-weight-bold"
                      style={{ width: "100%", borderRadius: 2 }}
                      onClick={this.onBuy}
                    >
                      Beli Sekarang
                    </button></Link>
                  </div>
                  <div
                    className="row justify-content-md-center"
                    style={{ paddingLeft: 0, marginTop: 8}}
                  >
                  <div className="col-sm-6">
                    <input type="button" className="btn btn-outline-danger" value="Tambah ke Keranjang" onClick={this.addToCart} style={{width:"95%"}}/>
                  </div>
                  <div className="col-sm-6">
                    <input type="button" value="Chat Pelapak" className="btn btn-outline-success" style={{width:"95%"}} />
                  </div>                        
                    
                  </div>
                  <div
                    className="col col-md-offset-8"
                    style={{ paddingLeft: 0, marginTop: 8 }}
                  >
                    <button
                      type="button"
                      className="btn btn-light"
                      style={{
                        borderRadius: 50,
                        width: "25%",
                        marginRight: 8,
                        fontSize: 10,
                        color: "black",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Apakah stok masih ada?
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-secondary"
                      style={{
                        borderRadius: 50,
                        width: "25%",
                        fontSize: 10,
                        color: "black",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Saya pesan sekarang ya!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" style={{padding:0}} >
            <div
                className="row"
                style={{ marginLeft: 4, marginTop: 8, marginBottom: 8, marginRight:16 }}
              >
              <text style={{fontSize:13}} >PELAPAK</text>
              
              </div>
              <div className="row" style={{ marginLeft: 4, marginTop: 8, marginBottom: 8, marginRight:16 }} >
              <img style={{width:"20%", borderRadius:50}} src={item.image}/>
              <div className="col">
              <div className="row" style={{marginLeft:4}} >
              <text className="font-weight-bold">{item.name}</text>  
              </div>
              <div className="row" style={{marginLeft:4}} >
              <text style={{fontSize: 12}} >100% (2048 feedback)</text>  
              </div>
              <div className="row" style={{marginLeft:4}} >
              <text style={{fontSize: 12, color: "red"}} >Nusantara Raya</text>  
              </div>
              </div>
              
              </div>
              <button
                      type="button"
                      className="btn btn-light font-weight-bold"
                      style={{
                        borderRadius: 2,
                        width: "95%",
                        borderColor: "#e7e7e7"
                      }}
                    >
                      Ikuti
                    </button>
          </div>
        </div>

        <div class="row" style={{ marginTop: "2%" }}>
          <div class="col-2" style={{ paddingRight: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              Detail Barang
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              Estimasi Ongkos Kirim
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              2019 Feedback
            </button>
          </div>
          <div class="col-2" style={{ padding: 0 }}>
            <button
              type="button"
              className="btn btn-light font-weight-bold "
              style={{
                borderRadius: 2,
                width: "100%",
                height: 70,
                color: "grey",
                borderColor: "#e7e7e7"
              }}
            >
              666 Ulasan Barang
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
          <div className="card" style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{margin:64}}>
            <div className="col-2">
              <text>
                Deskripsi
              </text>
            </div>
            <div className="col-10">
              <text>
             {item.description}
              </text>
            </div>
            </div>
          </div>

          </div>
        </div>
      </div>        
     )
 }
)
}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(Detail);
