import axios from "axios";
import { useEffect, useState } from "react";

type Music = {
    idArtist: string;
    strArtist: string;
    strAlbum: string;
    strAlbumThumb: string;
    strDescription: string;
    idAlbum: string;
}

interface FecthSearchState {
    music: Music[];
    isLoading: boolean;
    error: string | null;
}

const useFetchResult = (query: string) => {

    const [state, setState] = useState<FecthSearchState>({music: [], isLoading: false, error: null});
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        if (!query.trim()) {
            setState({ music: [], isLoading: false, error: null });
            return;
        }

        const fetchMusic = async () => {
            setState(prev => ({...prev, isLoading: true, error: null}));
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(query)}`);
                
                const rawAlbums = response.data && response.data.album ? response.data.album : [];
                
     
                    setState({ 
                        music: rawAlbums,
                        isLoading: false, 
                        error: null, 
                    });
                // console.log(rawAlbums)
                // console.log(track)
                console.log(response);
                // setState(response.data.album && responseTracks.data.tracks);
            } catch (error) {
                setState({ 
                    music: [],
                    isLoading: false, 
                    error: "Error fetching search results" });
                console.log(error);
            }

        }

        fetchMusic();
    }, [query]);

    return {
        music: state.music,
        isLoading: state.isLoading,
        error: state.error
    };
}

export default useFetchResult;