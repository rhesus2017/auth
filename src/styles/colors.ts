export type ThemeColors = {
  white: string;
  gradient: {
    pink: {
      pink07: string;
    };
    gray: {
      gray02: string;
    };
  };
  border: {
    normal: string;
    active: string;
  };
  font: {
    pure: string;
    primary: string;
    hint: string;
    tertiary: string;
  };
  ul: {
    white: string;
    light: string;
    primary: string;
  };
};

const colors: ThemeColors = {
  white: "#FFFFFF",
  gradient: {
    pink: {
      pink07: "#FF4081",
    },
    gray: {
      gray02: "#E9EBEC",
    },
  },
  border: {
    normal: "#E9EBEC",
    active: "#2D3035",
  },
  font: {
    pure: "#FAFAFA",
    primary: "#1C1E21",
    hint: "#C6C9CE",
    tertiary: "#9CA1AA",
  },
  ul: {
    white: "#FFFFFF",
    light: "#F1F1F1",
    primary: "#2D3035",
  },
};

export default colors;
