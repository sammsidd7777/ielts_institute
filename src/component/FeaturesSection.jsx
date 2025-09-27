import React from "react";

  const courseList = [
    { title: "Computer Science", desc: "Learn programming, algorithms, AI, and more to build a strong technical foundation." },
    { title: "Business Management", desc: "Master leadership, finance, marketing, and entrepreneurship skills for corporate success." },
    { title: "Data Science", desc: "Explore data analysis, machine learning, and big data tools to become a data expert." },
    { title: "Digital Marketing", desc: "Learn SEO, social media marketing, and branding to grow businesses online." },
    { title: "Finance & Accounting", desc: "Understand financial management, taxation, and auditing for a strong career in finance." },
    { title: "Human Resources", desc: "Develop skills in recruitment, training, and employee engagement for HR roles." },
  ];

const Features = () => {
  return (
    <div className="courses">
      <p className="subtitle">Our Courses</p>
      <h2 className="title">Programs We Offer</h2>
      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
