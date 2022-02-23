import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/resort">Resort Listing</Link>
                            </li>

                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/registration">Registration</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>

    )
}

export default Header
