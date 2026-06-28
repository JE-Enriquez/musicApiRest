import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset};

    body {

        font-family: ${porps => porps.theme.fonts.base};
        background: ${props => props.theme.colors.background};
    }

    button {
        font-size: ${props => props.theme.fonts.size14};
        width: ${props => props.theme.width.butons};
    }




`
export default GlobalStyled;