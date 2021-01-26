import React from 'react';
import {FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa";


const banner = () => {
    return (
        <header className = "header">
            <div className = "container">
                <div className = "row">
                    <div className="col-1">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaGithub />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <FaMailBulk />
                                    </li>
                                </ul>
                                    <p className = "para1"> Hello! My name is, </p>
                                    <h1 className = "head1"> Anjali Gupta </h1>
                                    <p className = "para2"> And I love to code! </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default banner
