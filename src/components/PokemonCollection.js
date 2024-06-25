import React from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemonList, searchedPokemon }) {
  const displayPokemon = () => {
    return pokemonList.map((pokemon) => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />
    })
  }

  const displaySearchedPokemon = () => {
    return searchedPokemon.map((pokemon) => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      {searchedPokemon ? displaySearchedPokemon() : displayPokemon()}
    </Card.Group>
  )
}

export default PokemonCollection
