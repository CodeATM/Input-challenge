import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const AdminModal = ({ toggleTab, toggleState }) => {
  return (
    <div
      className={
        toggleState === 1
          ? "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4 opacity-1 visible transition duration-300"
          : "opacity-0 hidden"
      }
    >
      <div className=" relative bg-containe p-8 rounded-xl bg-white">
        <MdOutlineCancel
          className="absolute right-8 top-8 text-xl cursor-pointer"
          onClick={() => toggleTab(0)}
        />
        <h3 className="text-xl mb-4 uppercase text-center text-gray-700 font-semibold">
          Add Project
        </h3>
        <form>
          <div className="space-y-2">
            <div className="">
              <label className="space-y-2">Name</label>
              <input
                type="text"
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Enter project Name"
              />
            </div>
            <div className="">
              <label className="space-y-2">Description</label>
              <input
                type="text"
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Add Description"
              />
            </div>

            <div className="">
              <label className="space-y-2">Category</label>
              <input
                type="text"
                className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                placeholder="Category(frontend, backend, fullStack, etc)"
              />
            </div>

            <div className="w-full flex justify-between gap-1 ">
              <div className="inputmodal_form-div">
                <label className="space-y-2">Github</label>
                <input
                  type="text"
                  className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                  placeholder="Repository"
                />
              </div>
              <div className="inputmodal_form-div">
                <label className="space-y-2">Hosted link</label>
                <input
                  type="text"
                  className="block w-full border border-gray-200 bg-container rounded-lg p-2 outline-none"
                  placeholder="Link"
                />
              </div>
            </div>


            <div className=" w-full mt-4 py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-900 text-center font-medium text-lg">
              <label for = 'upload' className="">upload image</label>
              <input
                type="file"
                className="hidden"
                id ='upload'
                placeholder="Link"
              />

            </div>
          </div>
        </form>

        <button
          type="submit"
          className="w-full mt-4 py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-900 text-center font-medium text-lg"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default AdminModal;
