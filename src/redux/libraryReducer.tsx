import { Song } from "./libraryActions"

interface LibraryState {
    songs: Song[];
};

const initialState: LibraryState = {
    songs: [],
};

// 2. Definimos el tipado de las acciones para que el switch sea 100% seguro
interface AddSongAction {
    type: "ADD_SONG";
    payload: Song;
}

interface RemoveSongAction {
    type: "REMOVE_SONG";
    payload: string; // El ID de la canción a eliminar
}

// Cons esta linea definimos que el action puede ser cuealquiera de las interfaces declaradas
type SongAction = AddSongAction | RemoveSongAction;

// 3. CORREGIDO: Añadimos los tipos a los parámetros "state" y "action"
const songReducer = (state = initialState, action: SongAction): LibraryState => {


    switch(action.type) {
        case "ADD_SONG":
            
                // Opcional pero recomendado: Evita duplicar la misma canción en la biblioteca
            const songExists = state.songs.some(item => item.idTrack === action.payload.idTrack);
            if (songExists) return state;

            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        case "REMOVE_SONG":
            return {
                 ...state,
                // CORREGIDO: Cambiado de "song.id" a "song.idTrack" para que coincida con tu objeto Song
                songs: state.songs.filter(item => item.idTrack !== action.payload)
            };        
        default:
            return state;
    }
}

export default songReducer;