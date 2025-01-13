import React from "react";

function CourseInput({ index, course, updateCourse }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateCourse(index, name, value);
  };

  return (
    <div className="flex items-center mb-4 space-x-4 ">
      {/* <input
        type="text"
        name="code"
        value={course.code}
        placeholder="Course Code"
        onChange={handleInputChange}
        className="p-2 m-2 rounded-lg input"
      /> */}
      <select
        name="grade"
        value={course.grade}
        onChange={handleInputChange}
        className="p-2 m-2 rounded-lg input"
      >
        <option value="">Select Grade</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="Abs">Abs</option>
      </select>
    </div>
  );
}

export default CourseInput;
