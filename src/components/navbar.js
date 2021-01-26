import React from 'react'

const navbar = () => {
    return (
        <navbar className = "navbar">
            <div className = "container">
                <ul className = "navbar__left">
                    <div className = "navbar__left.logo">
                        <img src="../images/anjali.png" alt="logo" />
                    </div>
                </ul>
                <ul className = "navbar__right">
                    <li> <a href = "" >Home</a></li>
                    <li> <a href = "" >About</a></li>
                    <li> <a href = "" >Skills</a></li>
                    <li> <a href = "" >Projects</a></li>
                    <li> <a href = "" >Blog</a></li>
                    <li> <a href = "" >Contact</a></li>
                </ul>
            </div>
        </navbar>
    )
}

export default navbar