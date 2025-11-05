
const Spinner = ({ 
  size = 20, 
  color = "var(--text-primary)", 
  thickness = 3,
  speed = '0.8s',
  className = '' 
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{
        animation: `spin ${speed} linear infinite`
      }}
    >
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -15;
          }
          100% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -125;
          }
        }
      `}</style>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeDasharray="80, 200"
        strokeDashoffset="0"
        style={{
          animation: `dash 1.5s ease-in-out infinite`
        }}
      />
    </svg>
  );
};

export default Spinner;
