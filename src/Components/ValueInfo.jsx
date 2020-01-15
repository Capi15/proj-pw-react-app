import React from 'react';

export default props => {
    return (
        <section className='secOp'>
            {props.isFetchingInfoCoins ? (
                <p> Loading</p>
            ) : props.infocoins ? (
                <div>
                    <p>
                        {' '}
                        <b>Bitcoin Value:</b> {props.infocoins.bitcoin.eur}
                    </p>
                    <p>
                        {' '}
                        <b>Ethereum Value:</b> {props.infocoins.ethereum.eur}
                    </p>
                </div>
            ) : (
                <p>não deu</p>
            )}
        </section>
    );
};
