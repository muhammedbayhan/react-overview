import React, { useState } from "react";

const Forms = () => {
  const [forms, setForms] = useState({ name: "", options: "", message: "" });

  const handleChanges = (e) => {
    setForms({ ...forms, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Forms
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              value={forms.name}
              type="text"
              onChange={handleChanges}
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="options"
              className="block text-sm font-medium text-gray-700"
            >
              Select Option
            </label>
            <select
              id="options"
              value={forms.options}
              name="options"
              onChange={handleChanges}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={forms.message}
              name="message"
              onChange={handleChanges}
              placeholder="Enter your message"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
            ></textarea>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(forms);
            }}
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
