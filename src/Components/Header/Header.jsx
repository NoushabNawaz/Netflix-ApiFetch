import React from 'react'
import { Link } from "react-router-dom"
import {ImSearch} from "react-icons/im"

import logo from "../../logo.png"

const Header = () => {
  return (
    <nav className="header">

<img src={logo} alt="" />
<div>
<Link to="./tvshows">TV Shows</Link>
<Link to="./moviess">Movies</Link>
<Link to="./recently added">Recently Added</Link>
<Link to="./my list">My List</Link>
</div>
<ImSearch />
    </nav>
  )
}

export default Header