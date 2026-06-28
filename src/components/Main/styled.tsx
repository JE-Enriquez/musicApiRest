import styled from "styled-components";

interface Error {
    error?: Boolean;
}


const MusicSection = styled.section`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-self: anchor-center;
    gap: 15px;
    box-sizing: border-box;
    gap: 10px;

`;

const MusicArticle = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    width: 200px;
    gap: 10px;
    justify-self: anchor-center;
    box-sizing: border-box;

`;

const MusicImage = styled.img`
    pading: 10px;
    width: 200px;
`;

const MusicH2 = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #FFF;
`;

const MusicH3 = styled.h3`
    font-size: 22px;
    font-weight: 600;
    color: #FFF;
`;

const MusicParaph = styled.p`
    font-size: 20px;
    font-weight: 500;
    
    color: ${props => props.theme.colors.secondary};
`;

const DetailFlags = styled.p<Error>`
    textAlign: center; 
    marginTop: 10px;
    color: ${props => {
        const error = props.error ?? true;
        if(!error) {
            return (props.theme.colors.secondary);
        }else{
            return 'red';
        }

    }};
`


export {
    MusicSection,
    MusicImage,
    MusicArticle,
    MusicH2,
    MusicH3,
    MusicParaph,
    DetailFlags
    
};