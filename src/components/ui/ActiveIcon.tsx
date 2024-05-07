const ActiveIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        strokeOpacity="0.5"
        strokeWidth="2"
        fill="none"
      >
        <animate
          attributeName="r"
          from="8"
          to="12"
          dur="1s"
          repeatCount="indefinite"
          begin="0s"
        />
        <animate
          attributeName="stroke-opacity"
          from="0.5"
          to="0"
          dur="1s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      {/* Dot */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
};

export default ActiveIcon;
