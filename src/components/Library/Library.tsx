import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/index'; // Importa el tipo del Paso 1
import { removeSong } from '../../redux/libraryActions'; // Acción para eliminar
import { Link } from 'react-router-dom';
import { MusicParaph, DetailButton } from '../Main/styled';
import { Song } from "../../redux/libraryActions"
import { LibraryContainer, LibraryTitle, LibraryVacio, LibraryTrack, LibraryCard, LibraryH2, LibraryId, BorrarContent, BorrarBoton } from './styles';


const Library = () => {

    const dispatch = useDispatch();

    // Hay que leer el estado
      // state.library apunta a songReducer, y .songs es el array []
    const savedSongs = useSelector ((state: RootState) => state.library.songs);

        // AGREGA ESTA LÍNEA PARA INVESTIGAR:
    console.log("Canciones detectadas por el useSelector en la Biblioteca:", savedSongs);

    const handleRemove = (idTrack: string) => {
        dispatch(removeSong(idTrack)); // Despacha al accion de eliminar
    };

    return(
        <>
            <div style={{margin: '10px'}}>
                <Link 
                    to="/"
                    style={{textDecoration: 'none', color: '#fff', margin: '10px'}}>Regresar al inicio</Link>
            </div>
            
            <LibraryTitle>Mi bliblioteca</LibraryTitle>
            
            <LibraryContainer>

                
                {
                    // Aplicamos el renderizado condicional
                    savedSongs.length === 0 ? (
                        <LibraryVacio>No has agregado ninguna cancion a tu biblioteca</LibraryVacio>
                    ) : (
                        <LibraryTrack>
                            {
                            // Vamos a mapear el arreglo de las canciones guardadas
                             savedSongs.map((song: Song) => {
                                const { idTrack, strTrack, strMusicVid } = song;

                                return(
                                    <>
                                    


                                    <LibraryCard key={idTrack}>
                                        <div>
                                            <LibraryH2>Nombre de la cancion: {strTrack}</LibraryH2>
                                            <LibraryId>Id cancion: {idTrack}</LibraryId>

                                            {strMusicVid && (
                                            <>
                                                <LibraryId>Link del video:</LibraryId>
                                                <LibraryId>{strMusicVid}</LibraryId>
                                            </>
                                            )}

                                            <Link 
                                                to={`/tracks/${idTrack}`}
                                                style={{ textDecoration: 'none', fontSize: '16px', color: '#fff', padding: '0 0 10px 10px' }}
                                            >
                                                Ver detalles
                                            </Link>

                                        </div>
                                        <BorrarContent style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>

                                            {/* Botón para eliminar la canción de la biblioteca */}
                                            <BorrarBoton 
                                                type="button" 
                                                onClick={() => handleRemove(idTrack)}
                            
                                            >
                                                X
                                            </BorrarBoton>
                                        </BorrarContent>      
                                    </LibraryCard>
                                    
                                    </>
                                )
                            })
                            }
                        </LibraryTrack>
                    )
                }
            </LibraryContainer>
        </>
    )
}

export default Library;