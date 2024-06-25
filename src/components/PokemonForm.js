import React, { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({ fetchData }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  })

  const handleChange = ({ target: { name, value } }) => {
    if (name === "frontUrl") {
      setNewPokemon((prev) => ({
        ...prev,
        sprites: {
          ...prev.sprites,
          front: value,
        },
      }))
    } else if (name === "backUrl") {
      setNewPokemon((prev) => ({
        ...prev,
        sprites: {
          ...prev.sprites,
          back: value,
        },
      }))
    } else {
      setNewPokemon({ ...newPokemon, [name]: value })
    }
  }

  const addNewPokemon = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newPokemon),
    }
    fetch("http://localhost:3001/pokemon", options)
      .then((resp) => resp.json())
      .then(fetchData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={addNewPokemon}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
