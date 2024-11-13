import { useState } from 'react';
import { useForm } from 'react-hook-form';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignInForm = ({authToggle}) => {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              {...register('email', {required:{value: true, message: "Email must be entered"}, pattern:{value: emailRegex, message: "Email is not valid"},})}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Enter your email"
            />
            {errors.email && <p className='text-red-500 pt-1'>{errors.email.message}</p>}
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
              {...register('password', {required:{value: true, message:"Password must be entered"}})}
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150"
              placeholder="Enter your password"
            />
            {errors.password && <p className='text-red-500 pt-1'>{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
          disabled={isSubmitting}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150"
          >
           {isSubmitting ? 'Submitting' : 'Submit'}
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <span onClick={authToggle} className="cursor-pointer font-medium text-black hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;