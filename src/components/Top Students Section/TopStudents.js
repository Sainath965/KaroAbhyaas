// Write your JS code here
import React from 'react'

const TopStudents = ({students}) => {
  return (
    <div className="top-students">
      <h2>Top Students</h2>
      <div className="student-list">
        {students.map((student, index) => (
          <div key={index} className="student">
            <h3>{student.name}</h3>
            <p>{student.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopStudents
