import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const SuccessModal = ({ toggleState, toggleTab }) => {
    const [name, setName] = useState('')


    useEffect(() => {
        const Name = localStorage.getItem('user')
        console.log(Name)
        setName(Name)
    }, [])

    
    
  return (
    <div
      className={
        toggleState === 1
          ? "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 opacity-1 visible transition duration-300"
          : "opacity-0 hidden"
      }
    >
      <div className="w-96 relative bg-container bg-white p-12 rounded-xl text-center">
        <h3 className="font-medium text-lg mb-2 uppercase text-center">
          Signup sucessful
        </h3>

        <p className="text-center-text-gray-500">
            Congratulations {name}, you have successfully created an employee's account!!!
        </p>
              <Link to="/Admin"
        <button
            onClick={() => {toggleTab(0)}}
            className="w-full mt-4 py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-900 text-center font-medium text-lg"
          >
            Continue
          </button>
</Link>
      </div>
    </div>
  );
};

export default SuccessModal;
