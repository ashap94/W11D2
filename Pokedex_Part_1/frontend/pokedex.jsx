import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import 

document.addEventListener( 'DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  ReactDOM.render( <h1>Pokedex</h1>, rootEl)

})