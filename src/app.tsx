import React,   {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import { Link ,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () =>{// un composant écrit sous forme de fonction

    return(
        <Router>
        <div>
        {/*la barre de navigation commun a toute les pages*/}
            <nav>
                <div>
                <Link to="/" className="brand-logo center">Acceuil</Link>
                </div>
            </nav>
            {/*le système de gestion des routes de notre application*/}
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/pokemons" component={PokemonList} />
                <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                <Route  path="/pokemons/:id" component={PokemonsDetail} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        </Router>
    );
}

export default App;