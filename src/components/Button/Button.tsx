import React, { ReactNode } from "react";
import "./Button.scss";
import { sizeClassesBtn, variantClassesBtn } from "./classes";
import { isBtnColored, isBtnRounded } from "./utils";

export interface IButtonProps {
  children: ReactNode | ReactNode[];
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  rounded?: boolean | number;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | string;
}

const Button = ({
  children,
  variant = "contained",
  size = "medium",
  rounded = false,
  color = "primary",
  ...props
}: IButtonProps) => {
  const rootClasses: string[] = [
    variantClassesBtn[variant],
    sizeClassesBtn[size],
  ];


  return (
    <div className="btnContainer">
      <button
        {...props}
        style={{
          borderRadius: isBtnRounded(rounded),
          backgroundColor: isBtnColored(color),
        }}
        className={rootClasses.join(" ")}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
