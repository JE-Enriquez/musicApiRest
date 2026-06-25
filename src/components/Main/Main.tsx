import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import useFetchResult from "../../Hooks/useFecthBuscar";
import TrackList from "../TrackList/TrackList";
import useFecthTracks from "../../Hooks/useFetchTracks";
import { Link } from "react-router-dom";





const Main = () => {

    // 1. Estado para capturar lo que se escribe en el input (SearchForm)
    const [textInput, setTextInput] = useState("");

    const [query, setQuery] = useState("");
    const [queryTracks, setQueryTracks] = useState("");
    const { music, isLoading, error } = useFetchResult(query);
    const { tracks, isLoadingT, errorT } = useFecthTracks(queryTracks);

    // Manejador para cuando el SearchForm envía el texto
    const handleSearchMusic = (texto: string) => {
        setTextInput(texto);       // Guardamos el texto actual
        setQuery(texto);      // Dispara la búsqueda de álbumes/música
    };

     // Manejador para el botón de TrackList
    const handleSearchTracks = () => {
        setQueryTracks(textInput); // Dispara la búsqueda de canciones usando el texto guardado
    };

    const renderLoading = () => <p>Cargando...</p>
    const renderError = () => <p>Hubo un error al cargar los datos</p>
    const renderMusic = () => {

        if(!query) return <p>Ingresa un artista para buscar</p>;
        if(music.length === 0) return <p>No se encontraron resultados para "{query}"</p>;
        

        return(
            
            <>
                {isLoading && <p>Buscando en la base de datos...</p>}
                {error && <p>{error}</p>}
                <div>
                    {
                        music.map(item  => {
                            const {idArtist, strArtist, strAlbumThumb, idAlbum, strAlbum} = item;
    
                            return(
                                <div>
                                    <br/>
                                    <img 
                                        src={strAlbumThumb} 
                                        alt="Album" />
                                    <h2>ID: {idArtist}</h2>
                                    <h3>Artista: {strArtist}</h3>
                                    <p>Id del album: {idAlbum}</p>
                                    <p>Nombre album: {strAlbum}</p>
                                    
                                </div>
                            )
                        })
                    }
    
                </div>
            </>
        )
    }

    const renderTracks = () =>{

        if(!query) return <p>Presiona "Ver canciones" para mostrar la lista</p>;
        if(tracks.length === 0) return <p>No se encontraron canciones para "{queryTracks}"</p>;
        

        return(
            
            <>
                {isLoadingT && <p>Buscando en la base de datos...</p>}
                {errorT && <p>{errorT}</p>}
                <div>
                    {
                        tracks.map(track => {
                            const {idTrack, strTrack, strMusicVid} = track;
                            return(
                                <div>
                                    <h2>Nombre cancion: {strTrack}</h2>
                                    <p>ID cancion: {idTrack}</p>
                                    <p>Link del video: {strMusicVid}</p>
                                    <Link to={`/tracks/${idTrack}`}>Ver detalles de la cancion</Link>
                                </div>
                            )
                            
                            
                        })
                    }
                </div>

            </>
        )    
    }


    const renderContent = () => {
        if(isLoading) return renderLoading();
        if(error) return renderError();
        return renderMusic();
    }

    return(
        <>
            <SearchForm onSearch={handleSearchMusic} />
            <div>
                {renderContent()}
            </div>

            <TrackList onSearch={handleSearchTracks} />

            <div>
                {renderTracks()}
            </div>


            
        </>

    )

    

}

export default Main;