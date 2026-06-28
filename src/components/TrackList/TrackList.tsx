import React from "react"
import { ButonDiv, ButonBtn, ButonH2 } from "./styled"

type SearchTracksProps = {
    onSearch: () => void;
   
}

const TrackList = ({ onSearch}: SearchTracksProps) => {
    
   
    
    return (
        <>
            <ButonDiv>
                <ButonBtn type="button" onClick={onSearch}>Ver canciones</ButonBtn>
                <ButonH2>Track List</ButonH2>
            </ButonDiv>
        </>
    )

}

export default TrackList