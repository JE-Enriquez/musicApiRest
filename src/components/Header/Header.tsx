import React from "react";
// import { Link } from "react-router-dom";

interface HeaderProps {
    appName: string;
}



const Header = ({appName} : HeaderProps ) => {


    return(
        
            <div>
                <header>
                    <h2>{appName}</h2>
                </header>
            </div>

            
    );

};

export default Header;