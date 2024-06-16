import React from 'react';
import './nav.css'; // Import your CSS file
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Login</a>
                </li>
                <li>
                    <a href="/getToken">TokenAddress</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;