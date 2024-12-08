import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <section className="navBarSection">
        <header className="header flex">

            <div className='logoDiv flex'>
                <img src='http://127.0.0.1:5500/images/workshare.png' id='logoImg'/>
                <a href="" className="logo">
                   <h1>Workshare</h1>
                </a>
            </div>

            <nav className="navBar">
                <ul className="navList flex">

                    <li className="navItem logIn">
                        <a href="#" className="navLink">Log in</a>
                    </li>

                    <li className="navItem signUp">
                        <a href="#" className="navLink">Sign up for free</a>
                    </li>

                </ul>
            </nav>

        </header>
    </section>
  )
}

export default Navbar