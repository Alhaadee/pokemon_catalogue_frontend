import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Pokemon = () => {

    const[pokemon,setPokemon] = useState({})
    const {name} = useParams();

    const fetchPokemonByName = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemonData = await response.json();
        setPokemon(pokemonData)
    }


    return (
       <div>
        <h2>{name}</h2>
        <p>{pokemon.base_experience}</p>
        {/* {
            pokemon.sprites.other.home.front_default ? <img src={pokemon.sprites.other.home.front_default} alt="pokemon"/> : <p> image not found</p>
        } */}
        <img src={pokemon.sprites.other.home.front_default} alt="pokemon"/>
        
       </div>
    )

}

export default Pokemon