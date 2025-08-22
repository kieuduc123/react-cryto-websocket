import React from "react";

type Props = {
    error: Error;
    resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => (
    <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error.message}</p>
        <button
            onClick={resetErrorBoundary}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
            Try again
        </button>
    </div>
);

export default ErrorFallback;
