import { IButtonProps } from "./Button";

export const isBtnRounded = (rounded: IButtonProps["rounded"]) => {
  if (typeof rounded === "number") {
    return `${rounded}px`;
  }

  return rounded ? "50px" : "5px";
};

export const isBtnColored = (color: IButtonProps["color"]) => {
  const types = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  return color && types.includes(color) ? color : "primary";
};
