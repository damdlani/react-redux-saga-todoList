import styled, { css } from 'styled-components';

export const List = styled.ul`
    padding: 15px;
    margin: 0;
    list-style: none;

    @media (max-width: 768px) {
        padding: 5px;
    }
`;

export const ListItem = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    margin: 10px;
    border-bottom: 1px solid #ccc;
    

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    flex-shrink: 0;
    width: 35px;
    align-self: center;
    height: 35px;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    line-height: 100%;
    border: none;
    outline: none;
    transition: .3s;

    @media (max-width: 768px) {
        width: 25px;
        height: 25px;
        font-size: 10px;
        padding: 0;
    }

    &:focus {
    outline: solid black 1px;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.2)
    }

    ${({check}) => check && css`
        background-color: rgb(5, 104, 10);

    `}

    ${({remove}) => remove && css`
        background-color: rgb(204, 5, 5);

        @media (max-width: 400px) {
            font-size: 12px;
        }
    `}
    ${({edit}) => edit && css`
        background-color: rgb(233, 199, 1);
        margin-right: 5px;

        @media (max-width: 400px) {
            font-size: 12px;
        }
    `}
`;

export const Span = styled.span`
    text-align: left;
    padding: 5px 20px;
    flex-grow: 1;
    font-size: 18px;
    font-style: normal;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 16px;
    }
    @media (max-width: 400px) {
        padding: 10px;
        font-size: 12px;
    }

    ${({done}) => done && css`
        text-decoration: line-through;
        font-style: italic;
    `}
`;