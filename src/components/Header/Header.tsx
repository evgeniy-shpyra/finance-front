import React from "react"
import { NavLink } from "react-router-dom"
import "./header.scss"

const Header = () => {
    const getLinkClass = (options: { isActive: boolean }) =>
        options.isActive ? "active" : ""

    return (
        <header className='header'>
            <nav className='header__nav'>
                <NavLink to='/' className={getLinkClass}>
                    Wallets
                </NavLink>
                <NavLink to='/categories' className={getLinkClass}>
                    Categories
                </NavLink>
                <NavLink to='/createTransaction' className={getLinkClass}>
                    Create transaction
                </NavLink>
                <NavLink to='/history' className={getLinkClass}>
                    History
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
