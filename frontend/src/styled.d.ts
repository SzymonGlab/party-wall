import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            elements: string;
            black: string;
            gray: string;
            white: string;
        };
    }
}
