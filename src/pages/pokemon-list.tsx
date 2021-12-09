import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokemonService from '../services/pokemon-service';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemons';
import PokemonCard from '../components/pokemon-card';

  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    //setPokemons(POKEMONS);
   // fetch('http://localhost:3001/pokemons')// on effectue une requette GET avec l'url mise en place dans le paramètre et la methode fetch
    //.then(response => response.json())
    //.then((pokemons)=>{
      //setPokemons(pokemons)
    //});

    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));

    
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row">
        <Link to="/pokemons/add" className= "btn btn-floating halfway-fab waves-effect waves-light"
          style={{position:"fixed", bottom:'25px', right:'25px'}}>
                  <i className= "material-icons">add</i>
                </Link>
        </div>
       
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red"/>
          
        ))}
        
        </div>

      </div>
    </div> 
  );
}
  
export default PokemonList;