import React, { ReactNode } from "react";
import "./ThemeWrapper.css";
import { ITheme } from "./utils/createTheme";

interface IProps {
  children: ReactNode | ReactNode[];
  theme?: ITheme;
}

const ThemeWrapper = ({ children, theme }: IProps) => {
  const rootCssVars: any = {
    "--background": "yellow",
    "--background2": "green",
  };

  const root = document.documentElement;
  for (const key in rootCssVars) {
    root.style.setProperty(key, rootCssVars[key]);
  }

  return (
    <div
      className={theme?.mode ? `${theme?.mode}-mode-theme` : "dark-mode-theme"}
      style={{
        backgroundColor: `var(--background2)`
      }}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
