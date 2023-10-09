import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Avenir Next';
    font-style: normal;
    src: url('fonts/AvenirNext-Regular.otf') format('woff2');
    }

    @font-face {
    font-family: 'Avenir Next';
    src: url('fonts/AvenirNext-It.otf') format('woff2');
    font-style: italic;
    }

    @font-face {
    font-family: 'Avenir Next';
    src: url('fonts/AvenirNext-Bold.otf') format('woff2');
    font-weight: bold;
    }

    body {
    margin: 0;
    font-family: 'Avenir Next';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
