import React, { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon
  const [showFront, setShowFront] = useState(true)

  const handleClick = () => setShowFront(!showFront)

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
