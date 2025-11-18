import React from "react";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Reset Password
        </h2>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
