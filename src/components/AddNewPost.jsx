import React from "react";

const AddNewPost = () => {
  return (
    <div class="container mx-auto px-4 py-10 shadow-md">
      <div class=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Add New Post
        </h2>
        {/* <p class="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p> */}
        <div class="relative mb-4">
          {/* <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label> */}
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Visual Text
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Publish
        </button>
      </div>
    </div>
  );
};

export default AddNewPost;
