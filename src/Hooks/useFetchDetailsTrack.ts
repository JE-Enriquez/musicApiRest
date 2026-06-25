import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type TrackDetail = {
    idTrack: string;
    strTrack: string;
    strArtist: string;
    strAlbum: string;
    strDescriptionEN: string;
    strMusicVid: string;
    strGenre: string;
};

interface FetchTrackInfoState {
    trackInfo: TrackDetail[];
    isLoadingDetail: boolean;
    errorDetail: string | null;
}
const useFetchDetailsTrack = () => {

    const { idTrack } = useParams<{ idTrack: string}>();

    const [state, setState] = useState<FetchTrackInfoState>({trackInfo: [], isLoadingDetail: false, errorDetail: null})

    useEffect(() => {
        if(!idTrack) return;

        const fetchDetails = async () => {

        

            setState({trackInfo: [], isLoadingDetail: true, errorDetail: null})
            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?h=${encodeURIComponent(idTrack)}`);
            
                const trackData = response.data && response.data.track ? response.data.track : [];

                if (trackData) {
                    setState({ 
                        trackInfo: trackData, 
                        isLoadingDetail: false, 
                        errorDetail: null });
                
                    } else {
                        setState({ trackInfo: [], isLoadingDetail: false, errorDetail: "No se encontraron detalles para esta canción" });
                    }

            }catch (error) {
                setState({ trackInfo: [], isLoadingDetail: false, errorDetail: "Error al conectar con el servidor" });
                console.error(error);
            }
            
        }
            fetchDetails();

    }, [idTrack]);

    return state;
    
};

export default useFetchDetailsTrack;