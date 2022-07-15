import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import PokemonThumbnails from "./components/PokemonThumbnails"

function App() {

  const [allPokemons, setAllPokemons] = useState([])

  const getAllPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    const data = await res.json()

    function pokemonObject (result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    pokemonObject(data.results)
    await console.log(allPokemons)

  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="app-container">
        <h1>Pokemons!</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemon, index) =>
                <PokemonThumbnails 
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                />
            )}
          </div>
        </div>
      </div>
    </div>
  

    
  )
}

export default App
