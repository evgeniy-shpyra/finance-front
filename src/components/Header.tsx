import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const linkClasses = ""
    const activeLinkClasses = ""
    return (
        <header className='h-[60px]'>
            <nav className='w-[900px] mx-auto flex align-center h-[100%]'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive
                            ? `${linkClasses} ${activeLinkClasses}`
                            : linkClasses
                    }
                >
                    Wallets
                </NavLink>
                <NavLink
                    to='/history'
                    className={({ isActive }) =>
                        isActive
                            ? `${linkClasses} ${activeLinkClasses}`
                            : linkClasses
                    }
                >
                    History
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
