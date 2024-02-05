interface IThemeOptions {
  generalColors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    white: string;
    black: string;
  };
  generalFont: {
    family: string;
  };
  generalBorder: {
    radius: string;
  };
}

export interface ITheme {
  mode: "light" | "dark";
  light: Partial<IThemeOptions>;
  dark: Partial<IThemeOptions>;
}

const defaultTheme: ITheme = {
  mode: "dark",
  light: {
    generalColors: {
      primary: "#0062FF",
      secondary: "#A162F7",
      success: "#24CA49",
      danger: "#DB3031",
      warning: "#FF7A2F",
      info: "#06D7F6",
      white: "#ffffff",
      black: "#000000",
    },
    generalFont: {
      family: "Roboto, sans-serif",
    },
    generalBorder: {
      radius: "5px",
    },
  },
  dark: {
    generalColors: {
      primary: "#0062FF",
      secondary: "#A162F7",
      success: "#24CA49",
      danger: "#DB3031",
      warning: "#FF7A2F",
      info: "#06D7F6",
      white: "#ffffff",
      black: "#000000",
    },
    generalFont: {
      family: "Roboto, sans-serif",
    },
    generalBorder: {
      radius: "5px",
    },
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
