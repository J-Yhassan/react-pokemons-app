import React,   {FunctionComponent, useEffect, useState} from 'react';
import POKEMONS from './models/mock-pokemons';
import Pokemon from './models/pokemon';

const App: FunctionComponent = ()=>{// un composant écrit sous forme de fonction
const [name] = useState<String>('Pokedex');
//const [pokemons] = useState<Pokemon[]>(POKEMONS);//créee un state pour gérer les pokemons
const [pokemons ,setPokemon] = useState<Pokemon[]>([]);//initialiser le state pour le hook
useEffect(()=>{// le hook d'effet
    setPokemon(POKEMONS);
},[]);

//gestion des intéractions
const showPokemonsCount = ()=>{
    console.log("il y a ", pokemons.length, "pokemons");
}
    return(
    <div>
        <h1 className= "center">{name}</h1>
        <p onClick={showPokemonsCount}>vous avez {pokemons.length} pokemon !</p>
        <div className="container">
            {pokemons.map(({name, picture, created, id})=>(
               <div className="col s6 m4" key={id}>
                   <div className= "card horizental">
                        
                        <div className= "card-image">
                            <img src={picture} alt={name} />
                        </div>
                        <div className= "card-content">
                                <p>{name}</p>
                                <p>{created.toDateString()}</p>
                        </div>
                      </div>  
               </div>
                   
               ))}
            
        </div>    
    </div>
    )
}

export default App;