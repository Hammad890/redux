import React from 'react';
import { useFormik } from 'formik';
import { formValidation } from '../../validations/form-validation';


const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function ControlForm() {
 
        const form = useFormik({
          initialValues,
          validationSchema:formValidation,
          onSubmit:(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          },
          });

          return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form onSubmit={form.handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.name}
                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {form.errors.name && form.touched.name && (
                      <div className="mt-1 text-sm text-red-600">{form.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.email}
                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {form.errors.email && form.touched.email && (
                      <div className="mt-1 text-sm text-red-600">{form.errors.email}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.password}
                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {form.errors.password && form.touched.password && (
                      <div className="mt-1 text-sm text-red-600">{form.errors.password}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.confirmPassword}
                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {form.errors.confirmPassword && form.touched.confirmPassword && (
                      <div className="mt-1 text-sm text-red-600">{form.errors.confirmPassword}</div>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={form.isSubmitting}
                      className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }