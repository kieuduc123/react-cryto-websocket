import React from "react";

const LoadingSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 h-[160px]" />
            ))}
        </div>
    );
};

export default LoadingSkeleton;
