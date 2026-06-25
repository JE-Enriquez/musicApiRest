
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import SongDetails from "./components/SongDetails/SongDetails";

function App() {
  
  return (
    <>
      <div>
        <section>
          <Header appName="Music Tube"/>
          {/* <SearchForm /> */}

        </section>

        {/* <Main /> */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/tracks/:idTrack" element={<SongDetails />} />
        </Routes>
        
        {/* <FetchMusic /> */}


      </div>
    </>
  );
}

export default App;
