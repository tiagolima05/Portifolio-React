import styled from "styled-components";
import { colors, font, size } from "../helpers/Constants";

export default function Footer() {
    return <NavBar>Developed by @tiagolima05</NavBar>;
}

const NavBar = styled.div`
    background-color: ${colors.secondary};
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: ${size.size1};
    font-family: ${font};
`;
