import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string,

    colors: {
      gradients: {
        gradient100: string;
        gradient90: string;
        gradient80: string;
        gradient85: string;
        gradient70: string;
        gradient60: string;
        gradient50: string;
        gradient40: string;
      },

      background: string;

      overlay: string;

      title: string;
      highlight: string;

      line: string;
      on: string;

      red: string;
    },

    fonts: {
      title700: string;
      title500: string;
      text500: string;
      text400: string;
    },
  }
}
