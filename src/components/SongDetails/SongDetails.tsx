// components/SongDetails/SongDetails.tsx
import React from "react";
import useFetchDetailsTrack from "../../Hooks/useFetchDetailsTrack";
import { Link } from "react-router-dom";

const SongDetails = () => {
    const { trackInfo, isLoadingDetail, errorDetail } = useFetchDetailsTrack();

    if (isLoadingDetail) return <p>Buscando información de la canción...</p>;
    if (errorDetail) return <p style={{ color: "red" }}>{errorDetail}</p>;
    if (!trackInfo || trackInfo.length === 0) return <p>No hay información disponible.</p>;

    return (
        <div>
            {
                trackInfo.map(info => {
                    const {idTrack, strTrack, strArtist, strAlbum, strGenre, strMusicVid} = info;

                    return(
                        <>
                            <h2>id: {idTrack} - Nombre: {strTrack}</h2>
                            <h3>Artista: {strArtist}</h3>
                            <p>Álbum: {strAlbum}</p>
                            <p>Genero: {strGenre}</p>
                            <p>{strMusicVid}</p>

                            <Link to="/">Regresar al inicio</Link>
                        
                        
                        </>
                    )
                })
            }
        </div>
    );
};

export default SongDetails;