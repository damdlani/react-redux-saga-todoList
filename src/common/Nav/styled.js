import styled, { css } from 'styled-components';
import {
    NavLink
} from 'react-router-dom';

const activeClassName = "active";

export const NavigationBar = styled.div `
    background-color: white;
    width: 100%;
    height: 8vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`;
export const NavigationItem = styled.li `
    margin: 10px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`

    &.${activeClassName} {
        border-bottom: solid 2px hsl(180, 66%, 20%);
    }
    color: black;
    ${({button}) => !button && css`
        color: hsl(180, 66%, 20%);
        border: 2px solid white;
        text-decoration: none;
        font-size: 18px;
        padding: 10px 10px 5px 10px;
        transition: .3s ease;
    `}
    &:hover {
        filter: brightness(1.5)
    }
`;