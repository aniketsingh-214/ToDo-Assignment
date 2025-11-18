import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupInput } from "../../schemas/auth.schema";
import client from "../../api/client";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });
  const setToken = useAuthStore((s) => s.setToken);
  const navigate = useNavigate();

  const onSubmit = async (values: SignupInput) => {
    try {
      const { data } = await client.post("/auth/signup", values);
      setToken(data.token);
      navigate("/todos");
    } catch (err: any) {
      alert(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          {...register("email")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
          placeholder="Create a password"
        />
      </div>
      <button
        disabled={formState.isSubmitting}
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-lg shadow-md hover:shadow-lg"
      >
        {formState.isSubmitting ? "Creating account..." : "Sign up"}
      </button>
    </form>
  );
};

export default SignupForm;
