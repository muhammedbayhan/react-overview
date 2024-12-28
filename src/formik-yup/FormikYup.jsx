import React from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "./RegisterFormSchemas";

const FormikYup = () => {
  const submit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        term: false,
      },
      validationSchema: RegisterFormSchemas,
      onSubmit: submit,
    });

  return (
    <div className="h-screen w-screen">
      <div className="w-1/4 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="border border-gray-400"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Age</label>
            <input
              className="border border-gray-400"
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && touched.age && (
              <p className="text-red-500 text-sm">{errors.age}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="border border-gray-400"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
              className="border border-gray-400"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex">
            <input
              className="border border-gray-400"
              type="checkbox"
              id="term"
              name="term"
              checked={values.term}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Terms and Conditions</label>
            {errors.term && touched.term && (
              <p className="text-red-500 text-sm">{errors.term}</p>
            )}
          </div>

          <button type="submit" className="w-full p-2 bg-amber-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormikYup;
