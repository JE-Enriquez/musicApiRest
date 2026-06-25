import React, { useState } from "react";

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
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="buscar" 
                        id="buscar" 
                        value={inputValue}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button type="submit">Buscar</button>

                </form>
            </div>
        
        </>
    )

}

export default SearchForm;