import React, { useState } from "react";
import { useForm } from "react-hook-form";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignUpForm = ({ authToggle }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const password = watch("password");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signUpHandler = () => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-Satoshi flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Create an Account
          </h2>
          <p className="text-sm text-gray-600">
            Join us to start shopping your favorite brands
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(signUpHandler)}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              {...register("fullName", {
                required: { value: true, message: "Full Name must be entered" },
                minLength: {
                  value: 3,
                  message: "At least 3 characters are required",
                },
              })}
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 pt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", {
                required: { value: true, message: "Email must be entered" },
                pattern: { value: emailRegex, message: "Email is not valid" },
              })}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 pt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          {/* <div>
            <label 
              htmlFor="phone" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Enter your phone number"
            />
          </div> */}

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              {...register("password", {
                required: { value: true, message: "Password must be entered" },
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must include an uppercase, lowercase, special symbol and a number",
                },
              })}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 pt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please confirm your password",
                },
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 pt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                {...register("terms", {
                  required: {
                    value: true,
                    message: "You must agree to the Terms and Conditions",
                  },
                })}
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-black font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-black font-medium hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 pt-1">{errors.terms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150"
          >
            Create Account
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              onClick={authToggle}
              className="font-medium cursor-pointer text-black hover:underline"
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
