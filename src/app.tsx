import React,   {FunctionComponent, useEffect, useState} from 'react';
import POKEMONS from './models/mock-pokemons';
import Pokemon from './models/pokemon';

const App: FunctionComponent = ()=>{// un composant écrit sous forme de fonction
const [name] = useState<String>('Pokedex');
const [pokemons] = useState<Pokemon[]>(POKEMONS);//créee un state pour gérer les pokemons
useEffect(()=>{
    
},[]);
    return(
        <>
        <h1>{name}</h1>
        <p>vous avez {pokemons.length} pokemon !</p> 
        </>//indiquer le nombre de pokemon présent dans notre state
    )
}

export default App;