const RainIcon = ({ width, height, color }: { width: string; height: string; color: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65726 7.63359C5.81393 7.60929 5.95894 7.53617 6.07163 7.42466C6.18433 7.31314 6.25896 7.16891 6.28491 7.0125C6.85163 3.57047 9.36132 1.5 12.2849 1.5C15.0004 1.5 16.814 3.26953 17.5443 5.14406C17.5912 5.26421 17.6686 5.37006 17.7689 5.45119C17.8692 5.53231 17.9889 5.58592 18.1162 5.60672C20.4599 5.98875 22.4099 7.55391 22.4099 10.275C22.4099 13.0594 20.1318 15 17.3474 15H6.37866C4.05835 15 2.15991 13.8422 2.15991 11.2875C2.15991 9.01547 3.97257 7.90219 5.65726 7.63359V7.63359Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M18.2849 18L15.2849 22.5M7.03491 18L5.53491 20.25L7.03491 18ZM10.7849 18L7.78491 22.5L10.7849 18ZM14.5349 18L13.0349 20.25L14.5349 18Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RainIcon;
