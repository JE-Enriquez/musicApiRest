import React from "react";
import { HeadDiv, HeadHeder, HeadH2 } from "./styled"

interface HeaderProps {
    appName: string;
}



const Header = ({appName} : HeaderProps ) => {


    return(
        
            <HeadDiv>
                <HeadHeder>
                    <HeadH2>{appName}</HeadH2>
                </HeadHeder>
            </HeadDiv>

            
    );

};

export default Header;