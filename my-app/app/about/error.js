"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Oops! Something went wrong.
                </h2>
                <p className="text-gray-600 mb-6">
                    We encountered an error. Please try again later or contact support.
                </p>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
