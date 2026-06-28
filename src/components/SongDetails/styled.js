import styled from "styled-components";

const DetailSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    width: 500px;
    gap: 10px;
    justify-self: anchor-center;
    box-sizing: border-box;

`;

const DetailH2 = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #FFF;
`;

const DetailH3 = styled.h3`
    font-size: 22px;
    font-weight: 600;
    color: #FFF;
`;

const DetailParaph = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.secondary};


`;

export {
    DetailSection,
    DetailH2,
    DetailH3,
    DetailParaph
};