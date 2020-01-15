import React, { Component } from 'react';

export default class FormCoin extends Component {
    state = {
        selectedCoin: 'BTC'
    };

    render() {
        return (
            <section>
                <div>
                    <div className='input-group-prepend'>
                        <select
                            value={this.state.selectedCoin}
                            onChange={({ target: { value } }) =>
                                this.setState(ps => ({
                                    ...ps,
                                    selectedCoin: value
                                }))
                            }
                        >
                            <option value='BTC'>Bitcoin</option>
                            <option value='ETC'>Ethereum</option>
                        </select>

                        <input
                            type='text'
                            class='form-control'
                            placeholder=''
                            aria-label='Example text with button addon'
                            aria-describedby='button-addon1'
                        />
                    </div>
                    <div>
                        <input
                            className='btn btn-success butFirstSec'
                            type='submit'
                            value='Buy'
                        />
                        <input
                            className='btn btn-primary butFirstSec'
                            type='submit'
                            value='Sell'
                        />
                    </div>
                </div>
            </section>
        );
    }
}
