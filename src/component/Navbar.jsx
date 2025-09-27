import React from 'react'

const Navbar = () => {
  return (
    <header>
      <img src="./img/Link → logo2.png.png" className="logo-img" alt="IELTS Institute" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Admissions</a>
        <a href="#">Faculty</a>
        <a href="#">Contact</a>
      </nav>
      <div className="profile-button">
        <img src="./img/siddpic.jpg" alt="Profile" />
        <span className="contact-text">
          <h6>Call Anytime</h6>
          <h3>9958234365</h3>
        </span>
      </div>
    </header>
  )
}

export default Navbar
