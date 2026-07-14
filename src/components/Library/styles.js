import styled from "styled-components";

const LibraryContainer = styled.section`
    display: flex;
    flex-direction: colums;
    padding: 15px;
    margin-top: 10px;
`;

const LibraryTitle = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 30px;

`;

const LibraryVacio = styled.p`
    margin-top: 20px;
    color: red;
    font-size: 16px;
`;

const LibraryTrack = styled.section`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;

`;

const LibraryCard = styled.article`
    display: flex;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    gap: 10px;
    width: 100%;
    margin: 10px;
`;

const LibraryH2 = styled.h2`
    font-size: 24px;
    padding: 10px;

`;

const LibraryId = styled.p`
    font-size: 20px;
    padding: 0 0 10px 10px;
`;

const BorrarContent = styled.div`
    display: flex;
    align-items: center;

`;

const BorrarBoton = styled.button`
    background-color: #ff4d4d;
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: 900;
`;

export {
    LibraryContainer,
    LibraryTitle,
    LibraryVacio,
    LibraryTrack,
    LibraryCard,
    LibraryH2,
    LibraryId,
    BorrarContent,
    BorrarBoton,
};