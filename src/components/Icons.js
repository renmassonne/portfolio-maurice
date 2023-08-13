export const ArrowIcon = ({ color, ...rest }) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity="1"
      d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM11.25 4L11.25 20H12.75L12.75 4L11.25 4Z"
      fill={color}
    />
    <path
      d="M18 14L12 20L6 14"
      stroke={color}
      style={{
        strokeWidth: 1.4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
  </svg>
);
