import styled from "styled-components";

const SearchInputs = styled.input`
    width: 300px;
    height: 30px;
    color: "#666666";
    padding: 10px
    font-size: 14px;
    
`;

const SearchForms = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 5px;

`;

const SearchButon = styled.button`
    font-size: 14px;
    width: 100px;
`;

export {
    SearchInputs,
    SearchForms,
    SearchButon

}