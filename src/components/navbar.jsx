import React, { useState } from 'react'
import { Link } from "react-router-dom";

 function Navbar() {

    const [list] = useState([
        'Home', 
        'Contact', 
    ])

    
     return(
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center container" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            {
                                list.map((item, index) => (
                                    <Link to={item}
                                    className="nav-link" 
                                    style={{cursor: 'crosshair'}} 
                                    key={index}>
                                    {item}
                                    </Link>
                                ))
                            }
                    </ul>
                    </div>
                </div>

            </nav>
     )
 }

 export default Navbar;