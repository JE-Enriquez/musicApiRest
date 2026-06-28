import styled from "styled-components";

const ButonDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    justify-self: center;
    margin-top: 20px;
    gap: 10px;
    width: 200px;

`;

const ButonBtn = styled.button`
    align-self: center;

`;

const ButonH2 = styled.h2`
    color: ${props => props.theme.colors.secondary};
    font-size: 18px;
    margin-top: 5px;
`

export {
    ButonDiv,
    ButonBtn,
    ButonH2,
}