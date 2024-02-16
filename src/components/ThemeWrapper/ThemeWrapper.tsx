import React, { ReactNode } from "react";
import "./ThemeWrapper.scss";
import { ITheme } from "./utils/createTheme";

interface IProps {
  children: ReactNode | ReactNode[];
  theme?: ITheme;
}

const ThemeWrapper = ({ children, theme }: IProps) => {
  if (theme?.colors) {
    const colors = Object.keys(theme?.colors);
    const font = theme?.generalFont?.family;

    const root = document.documentElement;
    for (const color of colors) {
      root.style.setProperty(`--${color}`, theme.colors[`${color}`]);
    }
    root.style.setProperty("--font", font || "Roboto, sans-serif");
  }

  return children;
};

export default ThemeWrapper;
