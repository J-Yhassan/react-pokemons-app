import React,   {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import { Link ,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () =>{// un composant écrit sous forme de fonction

    return(
        <Router>
        <div>
        {/*la barre de navigation commun a toute les pages*/}
            <nav style={{marginBottom: '10px'}}>
                <div className="container">
                <Link to="/pokemons" className="brand-logo center">Acceuil</Link>
                </div>
            </nav>
            {/*le système de gestion des routes de notre application*/}
            <Switch>
                <PrivateRoute exact path="/" component={PokemonList} />
                <PrivateRoute exact path="/pokemons" component={PokemonList} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
                <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                <PrivateRoute  path="/pokemons/:id" component={PokemonsDetail} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        </Router>
    );
}

export default App;