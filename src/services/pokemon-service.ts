import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 //methode de recupération globale
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 //methode d'une recuperation par id
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }
//methode de mise à jour jour
 static updatePokemon(pokemon: Pokemon): Promise<Pokemon>{
     return fetch(`http://localhost:3001/pokemons/${pokemon.id}`,{
     method: 'PUT',
     body: JSON.stringify(pokemon),
     headers:{'Content-Type': 'application/json'}
    })
     .then(response => response.json())
     .catch(error => this.handleError(error));
 }
//methode de suppression
 static deletePokemon(pokemon: Pokemon): Promise<{}>{
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`,{
    method: 'DELETE',
    body: JSON.stringify(pokemon),
    headers:{'Content-Type': 'application/json'}
   })
    .then(response => response.json())
    .catch(error => this.handleError(error));
}

//methode d'ajout d'élément
static postPokemon(pokemon: Pokemon): Promise<Pokemon>{
  

  return fetch(`http://localhost:3001/pokemons`,{
    method: 'POST',
    body: JSON.stringify(pokemon),
    headers:{'Content-Type': 'application/json'}
   })
    .then(response => response.json())
    .catch(error => this.handleError(error));
}

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

//methode error
  static handleError(error: Error): void{
    console.error(error);
  }


}