import React from "react";

interface Props {
  backgroundColor: string;
}

const PlannerIcon: React.FC<Props> = ({ backgroundColor }): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.498 18.001L6.793 14.296L8.208 12.881L10.502 15.175L15.795 9.882L17.21 11.297L10.498 18.001ZM21 6V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H6V2H8V4H16V2H18V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6ZM19 8H5V19H19V8Z"
        fill={`${backgroundColor}`}
      />
    </svg>
  );
};

export default PlannerIcon;
