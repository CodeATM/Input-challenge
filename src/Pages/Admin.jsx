import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import AdminModal from "../Components/AdminModal";

const Admin = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("ok");
  };

  return (
    <section className="section mt-16">
      <div className="container p-4">
        <div className="heading flex justify-between">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-700">
            Welcome, Admin
          </h1>
          <button
            className="px-2 py-2 text-white font-semibold text-xl bg-black rounded-md"
            onClick={() => toggleTab(1)}
          >
            Add Project
          </button>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          <ProjectCard toggleState={toggleState} toggleTab={toggleTab} />
          <ProjectCard toggleState={toggleState} toggleTab={toggleTab} />
          <ProjectCard toggleState={toggleState} toggleTab={toggleTab} />
          <ProjectCard toggleState={toggleState} toggleTab={toggleTab} />
          <ProjectCard toggleState={toggleState} toggleTab={toggleTab} />
        </div>
        <AdminModal toggleState={toggleState} toggleTab={toggleTab} />
      </div>
    </section>
  );
};

export default Admin;
