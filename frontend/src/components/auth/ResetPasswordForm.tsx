import React from "react";

// NOTE: Backend reset password endpoints are not implemented in backend sample above.
// Keep this UI for completeness. For assignment, mention in README what you implemented.
// This component demonstrates react-hook-form + zod usage.

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
      <div className="text-4xl mb-3">🔐</div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Reset password UI placeholder. Implement backend endpoint /auth/reset to
        connect.
      </p>
    </div>
  );
};

export default ResetPasswordForm;
