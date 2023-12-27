import React from 'react'
import img from '../assets/work5.jpg'
import {FiTrash, FiEdit} from 'react-icons/fi'

const ProjectCard = ({ toggleTab, toggleState }) => {
  return (
    <div className="bg-white rounded-md p-3">
        <img src={img} alt="" className='' />

        <div className="mt-4">
            <h1 className="text-graay-700 tracking-wide font-semibold text-lg">Project Name</h1>
            <p className="text-sm text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi. </p>
            <p className="text-gray-700 font-semibold">Frontend Project</p>
            <div className="mt-4 flex space-x-4 text-lg cursor-pointer">
                <FiTrash />
                <FiEdit onClick={() =>toggleTab(1)}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard