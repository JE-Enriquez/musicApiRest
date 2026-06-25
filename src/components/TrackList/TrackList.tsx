import React from "react"

type SearchTracksProps = {
    onSearch: () => void;
   
}

const TrackList = ({ onSearch}: SearchTracksProps) => {
    
   
    
    return (
        <>
            <div>
                <button type="button" onClick={onSearch}>Ver canciones</button>
                <h2>Track List</h2>
            </div>
        </>
    )

}

export default TrackList