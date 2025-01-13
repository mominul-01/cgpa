import React, { useState } from "react";

const Calculate = () => {
  const [grades, setGrades] = useState(Array(4).fill(""));
  const [gpa, setGpa] = useState(null);

  const gradeToPoint = {
    "A+": 4.0,
    A: 3.75,
    "A-": 3.5,
    "B+": 3.25,
    B: 3.0,
    "B-": 2.75,
    "C+": 2.5,
    C: 2.25,
    D: 2.0,
    F: 0.0,
    Abs: 0.0,
  };

  const handleGradeChange = (index, value) => {
    const newGrades = [...grades];
    newGrades[index] = value;
    setGrades(newGrades);
  };

  const addMoreGrade = () => {
    setGrades([...grades, ""]);
  };

  const calculateGPA = () => {
    const totalPoints = grades.reduce(
      (acc, grade) => acc + gradeToPoint[grade],
      0
    );
    setGpa((totalPoints / grades.length).toFixed(2));
  };

  return (
    <div className="container p-4 pb-32 mx-auto ">
      {/* Grade Table */}
      <div className="w-full mb-8 sm:mb-12 sm:mr-5 sm:float-left sm:w-auto">
        <table className="w-full border border-collapse border-gray-400 table-auto sm:w-48">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400">Grade</th>
              <th className="px-4 py-2 border border-gray-400">Grade Points</th>
              <th className="px-4 py-2 border border-gray-400">
                Numerical Marking
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(gradeToPoint).map(([grade, point]) => (
              <tr key={grade}>
                <td className="px-4 py-2 border border-gray-400">{grade}</td>
                <td className="px-4 py-2 border border-gray-400">{point}</td>
                <td className="px-4 py-2 border border-gray-400">
                  {grade === "F" || grade === "Abs"
                    ? "Below 40%"
                    : `${(4 - point + 0.25) * 10}% to less than ${
                        (4 - point) * 10
                      }%`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* GPA Calculator */}
      <h1 className="mt-5 mb-4 text-2xl font-bold text-center">
        CGPA Calculator
      </h1>
      <div className="grid gap-4 p-3 border-2 border-sky-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {grades.map((grade, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 border border-blue-500 rounded-md sm:flex-row sm:justify-between"
          >
            <label className="mb-2 text-xl sm:mb-0 sm:mr-4">
              Course {index + 1} Grade:
            </label>
            <select
              value={grade}
              onChange={(e) => handleGradeChange(index, e.target.value)}
              className="w-full p-2 text-xl text-black border border-blue-500 rounded-md sm:w-auto"
            >
              <option value="">Select Grade</option>
              {Object.keys(gradeToPoint).map((gradeOption) => (
                <option key={gradeOption} value={gradeOption}>
                  {gradeOption}
                  <span className="pl-4 mt-2 text-lg bg-orange-600 sm:mt-0 sm:ml-4">
                    {grade && `: ${gradeToPoint[grade].toFixed(2)}`}
                  </span>
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          onClick={addMoreGrade}
          className="w-full p-2 text-xl text-white rounded bg-cyan-500 sm:w-auto"
        >
          Add More Grade
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-5 sm:flex-row">
        <button
          onClick={calculateGPA}
          className="p-3 text-xl text-white bg-indigo-500 rounded"
        >
          Calculate CGPA
        </button>
        <span className="text-black">------------</span>
        {gpa && <h2 className="text-2xl text-black">Result CGPA: {gpa}</h2>}
      </div>
    </div>
  );
};

export default Calculate;
