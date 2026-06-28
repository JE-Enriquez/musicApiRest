
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import SongDetails from "./components/SongDetails/SongDetails";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "./components/theme/GlobalStyle.js";
import Theme from "./components/theme/index";

function App() {
  
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyled />

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
      </ThemeProvider>
    </>
  );
}

export default App;
