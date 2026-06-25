import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Tracks = {
    idLyric: string;
    idTrack: string;
    idArtist: String;
    idAlbum: string;
    strTrack: string;
    strAlbum: string;
    strArtist: string;
    strMusicVid: string;

}

interface FecthTracksState {
    tracks: Tracks[];
    isLoadingT: boolean;
    errorT: string | null;
}

const useFecthTracks = (queryTracks: string) => {
    
    // const {idTracks} = useParams();
    
    const [track, setTracks] = useState<FecthTracksState>({tracks: [], isLoadingT: false, errorT: null});

    useEffect(() => {

        if (!queryTracks.trim()) {
            setTracks({ tracks: [], isLoadingT: false, errorT: null });
            return;
        }

        const fetchTracks = async () => {
            setTracks(prev => ({...prev, isLoadingT: true, errorT: null}));
            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${queryTracks}`)
                const rawTracks = response.data && response.data.track ? response.data.track : [];
                
                setTracks({
                    tracks: rawTracks,
                    isLoadingT: false,
                    errorT: null
                });
                console.log(response)            
            }catch (error){
                setTracks({
                    tracks:[],
                    isLoadingT: false,
                    errorT: "Error no se encontro ningun track"
                }); 
                console.log(error)
            }

        }
        fetchTracks();
    }, [queryTracks])

    return{
        tracks: track.tracks,
        isLoadingT: track.isLoadingT,
        errorT: track.errorT
        
    }

}

export default useFecthTracks;