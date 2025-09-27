import React from 'react'

const Faculty = () => {

      const facultyList = [
    { name: "Dr. John Smith", subject: "Computer Science", img: "./image/siddpic.jpg" },
    { name: "Ms. Sarah Lee", subject: "Business Management", img: "./image/siddpic.jpg" },
    { name: "Mr. David Brown", subject: "Data Science", img: "./image/siddpic.jpg" },
  ];
  return (
    <div className="faculty">
      <h2>Meet Our Expert Faculty</h2>
      <div className="faculty-grid">
        {facultyList.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <img src={faculty.img} alt={faculty.name} />
            <h4>{faculty.name}</h4>
            <p>{faculty.subject}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculty
