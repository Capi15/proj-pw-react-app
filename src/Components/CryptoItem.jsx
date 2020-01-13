
/**
 * Module dependencies.
 */

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

/**
 * CryptoItem.
 */

class CryptoItem extends React.Component {
  render () {
    const { id, name, getCoin } = this.props;

    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td onClick={() => getCoin(id)}>{name}</td>
      </tr>
    );
  }
}

export default CryptoItem;
