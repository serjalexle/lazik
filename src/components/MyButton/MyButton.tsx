import React, { ReactNode } from "react";
import "./MyButton.css";

export interface IProps {
  children: ReactNode | ReactNode[];
  color: string;
  big?: boolean;
}

const MyButton = ({ children, color, big, ...props }: IProps) => {
  const rootClasses = ["my-button"];
  if (big) {
    rootClasses.push("big-btn");
  }

  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;
