export interface ITheme {
  mode: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    white: string;
    black: string;
    background: string;
    [key: string]: string;
  };
  generalFont?: {
    family: string;
  };
  generalBorder?: {
    radius: string;
  };
}

const defaultTheme: ITheme = {
  mode: "dark",
  colors: {
    primary: "#0062FF",
    secondary: "#A162F7",
    success: "#24CA49",
    danger: "#DB3031",
    warning: "#FF7A2F",
    info: "#06D7F6",
    white: "#ffffff",
    black: "#000000",
    background: "#1F1F1F",
  },
  generalFont: {
    family: "Roboto, sans-serif",
  },
  generalBorder: {
    radius: "5px",
  },
};

const createTheme = (theme: Partial<ITheme>): ITheme => {
  if (localStorage) {
    localStorage.setItem("theme", JSON.stringify(theme));
  }

  return {
    ...defaultTheme,
    ...theme,
  };
};

export default createTheme;
