import React from "react";
import SignupForm from "../components/auth/SignupForm";

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h2>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
