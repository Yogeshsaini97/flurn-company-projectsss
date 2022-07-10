import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import PokemonCards from './Components/PokemonCards';
import Searchpokemon from './Components/Searchpokemon';
import Showpokedetail from './Components/Showpokedetail';


function App() {
  return (<>
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<PokemonCards/>}/>
    <Route exact path="/Searchpokemon" element={<Searchpokemon/>}/>
    <Route exact path="/showpokedetail" element={<Showpokedetail/>}/>
    </Routes>
     
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
