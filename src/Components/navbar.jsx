import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default NavBar => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container'>
                <a className='navbar-brand' href='#'>
                    CoinZilla
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarNavDropdown'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>
                                User <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Wallet
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
