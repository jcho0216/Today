interface Font {
  title: string;
  subtitle: string;
}

interface Color {
  black000: string;
  blue000: string;
  blue100: string;
  gray000: string;
  gray100: string;
  red000: string;
  green000: string;
  green100: string;
  yellow000: string;
  yellow100: string;
  yellow200: string;
}

const fonts: Font = {
  title: "normal normal 700 32px 'Noto Sans'",
  subtitle: "normal normal 600 16px 'Noto Sans'",
};

export interface Theme {
  colors: Color;
  fonts: Font;
}

const colors: Color = {
  black000: "#1E1E1E",
  blue000: "#03A9F4",
  blue100: "#658DD7",
  gray000: "#FBFBFB",
  gray100: "#CFCFCF",
  red000: "#FF6F6A",
  green000: "#78AF58",
  green100: "#20A03C",
  yellow000: "#DFCF6B",
  yellow100: "#FFCE31",
  yellow200: "#FCC729",
};

const theme: Theme = {
  colors: colors,
  fonts: fonts,
};

export default theme;
