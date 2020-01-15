/**
 * Module dependencies.
 */

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import NavBar from './Components/navbar';
import ValueInfo from './Components/ValueInfo';
import FormCoins from './Components/FormCoins';
import './index.css';
//import rp from 'request-promise';

/**
 * App.
 */

class App extends React.Component {
    /**
     * State.
     */

    state = {
        infocoins: null,
        isFetchingInfoCoins: true,

        wallet: null,
        isFetchingUser: true
    };

    /**
     * componentDidMount.
     */
    componentDidMount() {
        fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=eur'
        )
            .then(r => {
                return r.json();
            })
            .then(result => {
                this.setState(prevstate => ({
                    ...prevstate,
                    infocoins: result
                }));
            })
            .catch(() => {})
            .finally(() => {
                this.setState(prevstate => ({
                    ...prevstate,
                    isFetchingInfoCoins: false
                }));
            });

        fetch('http://localhost:3001/users')
            .then(r => {
                return r.json();
            })
            .then(result => {
                this.setState(userstate => ({
                    ...userstate,
                    wallet: result
                }));
            })
            .catch(() => {})
            .finally(() => {
                this.setState(userstate => ({
                    ...userstate,
                    isFetchingUser: false
                }));
                console.log(this.userstate);
            });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <section className='secOp'>
                                <FormCoins />
                                <p>Compre aqui</p>
                            </section>
                        </div>
                        <div className={'col-6'}>
                            <ValueInfo
                                isFetchingInfoCoins={
                                    this.state.isFetchingInfoCoins
                                }
                                infocoins={this.state.infocoins}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
