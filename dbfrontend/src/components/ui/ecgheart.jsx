import React from 'react';

export default function ECGHeart() {
  return (
    <div className="w-full h-full md:w-1/2 lg:w-1/3 mx-auto"> {/* Responsive container */}
      <svg
        className="w-full h-auto"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" /* Maintains aspect ratio */
      >
        <path
          d="M0,50 L10,50 L20,0 L30,100 L40,50 L50,50 L60,50 L70,0 L80,100 L90,50 L100,50"
          fill="none"
          stroke="rgba(239, 68, 68, 0.2)"
          strokeWidth="1.5" /* Reduced default stroke width */
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ecg-path"
        />
      </svg>
      <style jsx>{`
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 300;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        .ecg-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawLine 2.5s ease-in-out infinite;
        }

        /* Media query for smaller screens */
        @media (max-width: 768px) {
          .ecg-path {
            stroke-width: 1; /* Reduce stroke width on smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
