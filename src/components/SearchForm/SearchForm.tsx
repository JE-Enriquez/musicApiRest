import React, { useState } from "react";
import { SearchInputs, SearchForms, SearchButon } from "./styled";

type SearchBarProps = {
    
    onSearch: (value: string) => void;
   
}

const SearchForm = ({onSearch}: SearchBarProps ) => {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log("Presiono el boton BUSCAR");
        onSearch(inputValue); //Mandamos el texto al padre

    }
    
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(`Input cambio a ${value}`);
        setInputValue(value);

    }

    return(
        <>
            <div>
                <SearchForms onSubmit={handleSubmit}>
                    <SearchInputs 
                        type="text" 
                        name="buscar" 
                        id="buscar" 
                        value={inputValue}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <SearchButon type="submit">Buscar</SearchButon>

                </SearchForms>
            </div>
        
        </>
    )

}

export default SearchForm;