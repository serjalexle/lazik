import React, { Children, ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
  gs: number;
  item?: boolean;
  container?: boolean;
  style?: React.CSSProperties;
}

const Grid = ({ container, item, children, style, gs, ...props }: IProps) => {
  const rootClasses = [];

  if (item && container) {
    throw new Error("Grid item and container cannot be used together");
  }

  if (!item && !container) {
    throw new Error("Grid item or container must be used");
  }

  if (item) {
    rootClasses.push("grid-item");
  }

  if (container) {
    rootClasses.push("grid-container");
  }

  return (
    <div
      {...props}
      className={rootClasses.join(" ")}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        ...style,
        width: gs ? 100 / gs + "%" : "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
