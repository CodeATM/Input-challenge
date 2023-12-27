import React from "react";
import { useState } from "react";
import SuccessModal from "../Components/SuccessModal";

const Register = () => {
  // const [submitting, setIsSubmitting] = useState(false);

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("ok");
  };

  const [details, setDetails] = useState({
    email: "",
    password: "",
    fullname: "",
    address: '',
    phonenumber: '',
    role: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('user', details.fullname)

    setDetails({
      email: "",
      password: "",
      fullname: "",
      address: '',
      phonenumber: '',
      role: ''
    })
    toggleTab(1)
  }

  const close = () => {
    toggleTab(0)
                   
  }

  return (
    <>
    <div className="h-screen w-screen  bg-[#f5f5f5] z-50 flex justify-center items-center px-4">
      <div className=" relative bg-containe p-12 rounded-xl bg-white">
        <div className="text-gray-400 text-center">
          Welcome
        </div>
        <h3 className="font-medium text-lg mb-4 uppercase text-center text-gray-700">
          Create An Employee Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="">
              <label className="block text-gray-600 text-sm">Name</label>
              <input
                type="text"

                required
                value={details.fullname}
                onChange={(e) =>
                  setDetails({ ...details, fullname: e.target.value })
                }
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Enter fullname"
              />
            </div>
            <div className =''>
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="text"
  
                required
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="hello@gmail.com"
              />
            </div>



            <div className="w-full flex flex-col md:flex-row gap-x-4">
              <div className =''>
                <label className="block text-gray-600 text-sm">Phonenumber</label>
                <input
                  type="phonenumber"
                  required 

                  value={details.phonenumber}
                  onChange={(e) =>
                    setDetails({ ...details, phonenumber: e.target.value })
                  }
                  className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                  placeholder="Add Phonenumber"
                />
              </div>
              <div className =''>
                <label className="block text-gray-600 text-sm">Address</label>
                <input
                  type="text"

                  required
                  value={details.address}
                  onChange={(e) =>
                    setDetails({ ...details, address: e.target.value })
                  }
                  className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                  placeholder="Add Address"
                />
              </div>
            </div>
            <div className =''>
              <label className="block text-gray-600 text-sm">Add Role <span>(e.g Frontend developer,Backend developer etc)</span></label>
              <input
                type="role"

                required
                value={details.role}
                onChange={(e) =>
                  setDetails({ ...details, role: e.target.value })
                }
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Add Role"
              />
            </div>
            <div className =''>
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                name="Password"
                required
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <button
            // onClick={() => {handleSubmit()}}
            type="submit"
            className="w-full mt-4 py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-700 text-center font-medium text-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    <SuccessModal toggleState={toggleState} toggleTab={toggleTab}/>

    </div>

    </>
  );
};

export default Register;
