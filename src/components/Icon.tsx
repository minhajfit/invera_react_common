import React from "react";
import { FaHome, FaArrowRight , FaReact} from "react-icons/fa";

interface IconProps {
  iconType: "Home" | "Go" | "LOGO" |string; // Extend this to include other icon types
  color?: string; // Accepts any CSS color value
  size?: "small" | "medium" | "large" | number; // Predefined or custom sizes
  className?: string; // Optional for additional styling
}

const Icon: React.FC<IconProps> = ({
  iconType,
  color = "black", // Default color
  size = "medium",
  className,
}) => {
  // Dynamically select the icon
  let IconComponent;

  switch (iconType) {
    case "Home":
      IconComponent = FaHome;
      break;

      case "Go":
      IconComponent = FaArrowRight;
      break;

      case "LOGO":
      IconComponent = FaReact;

      break;

    // Add more icons as needed
    default:
      IconComponent = FaHome; // Fallback to a default icon
  }

  // Define size mapping
  const sizeMapping = {
    small: 16,
    medium: 24,
    large: 36,
  };

  const iconSize = typeof size === "number" ? size : sizeMapping[size] || 24;

  return (
    <IconComponent
      color={color}
      size={iconSize}
      className={className}
      style={{ color, fontSize: iconSize }}
    />
  );
};

export default Icon;
