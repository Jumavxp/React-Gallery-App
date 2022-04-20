import React from 'react'

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand mb-0 h2">
                    Juan Manuel Velez - &copy; {new Date().getFullYear()}
                </div>
            </div>
        </nav>
    )
}

export default Footer