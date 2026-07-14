import { RootState } from '../../redux/index'; 
import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";
import useFecthTracks from "../../Hooks/useFetchTracks";
import SearchForm from "../SearchForm/SearchForm";
import useFetchResult from "../../Hooks/useFecthBuscar";
import TrackList from "../TrackList/TrackList";
import { Link } from "react-router-dom";
import { MusicSection, MusicImage, MusicArticle, MusicH2, MusicH3, MusicParaph, DetailFlags, DetailButton } from "./styled";

// Tipamos song para que tome los valores de la api
interface Song {
    idTrack: string;
    strTrack: string;
    strMusicVid: string;
    // Añade aquí más propiedades si tu API devuelve más datos
}


const Main = () => {
    // Usandondo dispatch para agregar a una biblioteca
    const dispatch = useDispatch();

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

    const handleAddSong = (song: Song) => {
    if (!song.idTrack) return;
     console.log("Canción enviada a Redux:", song); // <-- Añade esta línea
    dispatch(addSong(song));

    }

    const renderLoading = () => <MusicParaph style={{textAlign: 'center', marginTop: '10px'}}>Cargando...</MusicParaph>
    const renderError = () => <DetailFlags>Hubo un error al cargar los datos</DetailFlags>
    const renderMusic = () => {

        if(!query) return <MusicParaph style={{textAlign: 'center', marginTop: '10px'}}>Ingrsa un artista para buscar...</MusicParaph>;
        if(music.length === 0) return <DetailFlags>No se encontraron resultados para "{query}"</DetailFlags>;
        

        return(
            
            <>
                {isLoading && <MusicParaph>Buscando en la base de datos...</MusicParaph>}
                {error && <DetailFlags>{error}</DetailFlags>}
                <MusicSection>
                    {
                        music.map(item  => {
                            const {idArtist, strArtist, strAlbumThumb, idAlbum, strAlbum} = item;
    
                            return(
                                <MusicArticle>
                                    <br/>
                                    <MusicImage 
                                        src={strAlbumThumb} 
                                        alt="Album" />
                                    <MusicH2>ID: {idArtist}</MusicH2>
                                    <MusicH3>Artista: {strArtist}</MusicH3>
                                    <MusicParaph>Id del album: {idAlbum}</MusicParaph>
                                    <MusicParaph>Nombre album: {strAlbum}</MusicParaph>
                                    
                                </MusicArticle>
                            )
                        })
                    }
    
                </MusicSection>
            </>
        )
    }

    const savedSongs = useSelector((state: RootState) => state.library.songs);
    const renderTracks = () =>{

        if(queryTracks !== query) return <MusicParaph style={{textAlign: 'center', marginTop: '10px'}}>Presiona "Ver canciones" para mostrar la lista</MusicParaph>;    
        if(!queryTracks) return <MusicParaph style={{textAlign: 'center', marginTop: '10px'}}>Presiona "Ver canciones" para mostrar la lista</MusicParaph>;
        if(tracks.length === 0) return <DetailFlags>No se encontraron canciones para "{queryTracks}"</DetailFlags>;
        
         // Traemos las canciones de Redux dentro de Main para comparar
        return(
            
            <>
                {isLoadingT && <MusicParaph>Buscando en la base de datos...</MusicParaph>}
                {errorT && <DetailFlags>{errorT}</DetailFlags>}
                <section>
                    {
                        tracks.map(track => {
                            const {idTrack, strTrack, strMusicVid} = track;

                            // 2. Verificamos si esta canción específica ya fue guardada
                            const isAlreadySaved = savedSongs.some(song => song.idTrack === idTrack);
                            
                            return(
                                <MusicArticle
                                    style={{width: '500px'}}
                                    key={idTrack}
                                >
                                    <MusicH2>Nombre cancion: {strTrack}</MusicH2>
                                    <MusicParaph>ID cancion: {idTrack}</MusicParaph>
                                    <MusicParaph>Link del video:</MusicParaph>
                                    <MusicParaph>{strMusicVid}</MusicParaph>
                                    <Link 
                                        to={`/tracks/${idTrack}` }
                                        style={{textDecoration: 'none', fontSize: '16px'}}
                                        
                                        >Ver detalles de la cancion</Link>
                                    {/* En el boton se pasa todo el objeto al hacer click */}
                                    <DetailButton 
                                        type="button" 
                                        onClick={() => handleAddSong(track)}
                                        disabled={isAlreadySaved}
                                        style={
                                            {backgroundColor: isAlreadySaved ? '#ccc' : '#1db954', 
                                            color: 'white',
                                            cursor: isAlreadySaved ? 'not-allowed' : 'pointer'
                                        }}  

                                    >{isAlreadySaved ? '✓ Guardado en biblioteca' : 'Agregar a biblioteca'}</DetailButton>
                                </MusicArticle>
                            )
                            
                            
                        })
                    }
                </section>

            </>
        )    
    }
    
    const renderContent = () => {
        if(isLoading) return renderLoading();
        if(error) return renderError();
        return renderMusic();
    }

    const renderContentT = () => {
        if(isLoadingT) return renderLoading();
        if(errorT) return renderError();
        return renderTracks();
    }


    return(
        <>
            <SearchForm onSearch={handleSearchMusic} />
            <div>
                {renderContent()}
            </div>

            <TrackList onSearch={handleSearchTracks} />
            
            <div>
                {renderContentT()}
            </div>


            
        </>

)



}

export default Main;