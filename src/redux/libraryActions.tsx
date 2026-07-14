// 1. Definimos la interfaz con los datos que maneja tu app de música
export interface Song {
    idTrack: string;
    strTrack: string;
    strAlbumThumb?: string; // El signo ? los hace opcionales por si alguna canción no los tiene
    idAlbum?: string;
    strAlbum?: string;
    strMusicVid: string;
}

export const addSong = (song: Song) => {
   return{
        type: "ADD_SONG" as const,
        payload: song,

   }
}

export const removeSong = (songId: string) => {
    return{
        type: "REMOVE_SONG",
        payload: songId,
    }
}