import React from 'react'
import  "../component/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg pb-3 " >
  <div class="navbar-brand mx-5"><h2 >Re:T<span className='navSpan'>O</span>ur</h2></div>
  <button class="navbar-toggler navtog" type="button" data-toggle="collapse" data-target="#navbarNav"
   aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse colr mx-5" id="navbarNav">
    <ul class="navbar-nav ms-auto colr">
      <li class="nav-item active">
        <a class="nav-link" href="#">Store List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tour Locator</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          System Pages
        </a>
        <div class="dropdown-menu drpmenu" >
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Tutorials
        </a>
        <div class="dropdown-menu drpmenu" >
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <button className='nav-btn'>+Submit a Tour</button>
      </li>
      {/* </ul> */}
    {/* <ul class="navbar-nav"> */}
      </ul>
  </div>
</nav>
    </div>
  )
}
