import React, { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
  const [triggerFetch, setTriggerFetch] = useState(false)
  const [pokemonList, setPokemonList] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState("")

  const onSearch = (searchInput) => {
    searchInput
      ? setSearchedPokemon(
          pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : setSearchedPokemon("")
  }
  const fetchData = () => setTriggerFetch(!triggerFetch)

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data))
  }, [triggerFetch])

  if (!pokemonList) {
    return "Loading..."
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={onSearch} />
      <br />
      <PokemonCollection
        pokemonList={pokemonList}
        searchedPokemon={searchedPokemon}
      />
    </Container>
  )
}

export default PokemonPage
