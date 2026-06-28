// components/SongDetails/SongDetails.tsx
import React from "react";
import useFetchDetailsTrack from "../../Hooks/useFetchDetailsTrack";
import { Link } from "react-router-dom";
import { DetailSection, DetailH2, DetailH3, DetailParaph } from "./styled" 

const SongDetails = () => {
    const { trackInfo, isLoadingDetail, errorDetail } = useFetchDetailsTrack();

    if (isLoadingDetail) return <DetailParaph>Buscando información de la canción...</DetailParaph>;
    if (errorDetail) return <DetailParaph style={{ color: "red" }}>{errorDetail}</DetailParaph>;
    if (!trackInfo || trackInfo.length === 0) return <DetailParaph>No hay información disponible.</DetailParaph>;

    return (
        <DetailSection>
            {
                trackInfo.map(info => {
                    const {idTrack, strTrack, strArtist, strAlbum, strGenre, strMusicVid} = info;

                    return(
                        <>
                            <DetailH2>id: {idTrack} - Nombre: {strTrack}</DetailH2>
                            <DetailH3>Artista: {strArtist}</DetailH3>
                            <DetailParaph>Álbum: {strAlbum}</DetailParaph>
                            <DetailParaph>Genero: {strGenre}</DetailParaph>
                            <DetailParaph>{strMusicVid}</DetailParaph>

                            <Link 
                                to="/"
                                style={{textDecoration: 'none'}}>Regresar al inicio</Link>
                        
                        
                        </>
                    )
                })
            }
        </DetailSection>
    );
};

export default SongDetails;