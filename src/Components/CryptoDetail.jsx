
/**
 * Module dependencies.
 */

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import rp  from 'request-promise';

/**
 * CryptoDetail.
 */

class CryptoDetail extends React.Component {
  render () {
    const { eur, btc, eth, name } = this.props;

    return (
      <div className="card">
        <div className="card-body">
        <h2>{name}</h2>
        <p className="card-text">Eur: <span>{eur}</span></p>
        <p className="card-text">Btc: <span>{btc}</span></p>
        <p className="card-text">Eth: <span>{eth}</span></p>
        </div>
      </div>
    );
  }
}

export default CryptoDetail;
