import React from "react";
import * as Icons from "./fonticon"; // Import all icons from fonticon.tsx as a single object

interface IconProps {
  iconType: string; // Dynamically map any icon type from fonticon.tsx
  color?: string; // Accepts any CSS color value
  size?: "small" | "medium" | "large" | number; // Predefined or custom sizes
  className?: string; // Optional for additional styling
}

const Icon: React.FC<IconProps> = ({
  iconType,
  color = "inherit", // Default color
  size = "medium",
  className,
}) => {
  // Dynamically select the icon
  const IconComponent = Icons[iconType as keyof typeof Icons];

  if (!IconComponent) {
    console.warn(`Icon "${iconType}" not found in fonticon.tsx`);
    return null; // Return nothing if the icon is not found
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
