import React from "react";
import { HeadDiv, HeadHeder, HeadH2, MenuDIv } from "./styled"
import { Link } from "react-router-dom";

interface HeaderProps {
    appName: string;
}



const Header = ({appName} : HeaderProps ) => {


    return(
        <>
            <HeadDiv>
                <HeadHeder>
                    <HeadH2>{appName}</HeadH2>
                </HeadHeder>
            </HeadDiv>
                <MenuDIv>
                    <Link 
                        to="/Library"
                        style={{textDecoration: 'none', color: '#fff'}}>Mi biblioteca</Link>

                </MenuDIv>
        
        </>

            
    );

};

export default Header;