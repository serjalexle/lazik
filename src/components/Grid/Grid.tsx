import React, { ReactNode } from "react";
import "./Grid.css";

interface IProps {
  children: ReactNode | ReactNode[];
  gs?: number;
  item?: boolean;
  container?: boolean;
  style?: React.CSSProperties;
}

const Grid = ({ container, item, children, style, gs, ...props }: IProps) => {
  const rootClasses = [];
  // const calculatedGridWidth = useMemo(() => {
  //   if (container) {
  //     return "100%";
  //   }

  //   if (!gs) {
  //     return "100%";
  //   }

  //   return `${100 / (12 / gs)}%`;
  // }, [gs, container]);

  const calculatedGridWidth = () => {
    if (container) {
      return "100%";
    }

    if (!gs) {
      return "100%";
    }

    return `${100 / (12 / gs)}%`;
  };

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
        ...style,
        width: calculatedGridWidth(),
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
