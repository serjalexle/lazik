import React, { ReactNode } from "react";
import "./Button.css";

export interface IProps {
  children: ReactNode | ReactNode[];
  variant?: string;
}

const Button = ({ children, variant, ...props }: IProps) => {
  const rootClasses: string[] = [variant || "contained-btn"];

  return (
    <div className="btnContainer">
      <button {...props} className={rootClasses.join(" ")}>
        {children}
      </button>
    </div>
  );
};

export default Button;
