import React, { useState } from "react";
import Calulate from "./components/Calulate";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="container mx-auto text-white mp-8">
    //   <h1 className="mb-4 text-2xl font-bold">GPA Calculator</h1>
    //   <div className="grid grid-cols-4 gap-4 p-3 border-2 border-sky-500 ">
    //     {grades.map((grade, index) => (
    //       <div key={index} className="">
    //         <label className="text-xl">Course {index + 1} Grade:</label>
    //         <select
    //           value={grade}
    //           onChange={(e) => handleGradeChange(index, e.target.value)}
    //           className="p-3 text-xl text-black border-4 input border-sky-500"
    //         >
    //           <option value="">Select Grade</option>
    //           {Object.keys(gradeToPoint).map((gradeOption) => (
    //             <option key={gradeOption} value={gradeOption}>
    //               {gradeOption}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     ))}
    //     <button
    //       onClick={addMoreGrade}
    //       className="flex justify-center w-48 px-3 py-3 text-xl text-black rounded-md bg-cyan-500"
    //     >
    //       Add More Grade
    //     </button>
    //   </div>

    //   <div className="flex items-center justify-center gap-2 mt-5">
    //     <button
    //       onClick={calculateGPA}
    //       className="p-3 text-xl text-white bg-indigo-500 rounded"
    //     >
    //       Calculate GPA
    //     </button>
    //     <span className="text-black">------------</span>
    //     {gpa && <h2 className="text-2xl text-black ">Result CGPA : {gpa}</h2>}
    //   </div>
    // </div>
    <>
      <Banner />
      <Calulate />
      <Footer />
    </>
  );
}

export default App;
