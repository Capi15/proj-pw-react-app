
/**
 * Module dependencies.
 */

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CryptoItem from './CryptoItem';

/**
 * CryptoList.
 */

class CryptoList extends React.Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
          </tr>
        </thead>

        <tbody>
          {this.props.coins.map(coin => {
            return (
              <CryptoItem
                getCoin={(id) => this.props.getCoin(id)}
                id={coin.id}
                name={coin.name}
              />
            )
          })}

        </tbody>
      </table>
    );
  }
}

export default CryptoList;
