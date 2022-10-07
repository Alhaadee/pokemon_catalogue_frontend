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


    const pokemonImg = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
    
    useEffect(()=>{
        fetchPokemonByName();
    })
 
    


    return (
       <div>
        <button onClick={()=>fetchPokemonByName()}>Show details</button>
        <h2>{name}</h2>
        <p>Pokemon ID:{pokemon.id}</p>
        {/* {
            pokemon.sprites.other.home.front_default ? <img src={pokemon.sprites.other.home.front_default} alt="pokemon"/> : <p> image not found</p>
        } */}
        <img src={pokemonImg} alt="pokemon"/>
        <h3>Abilities</h3>
        <ul>
            {/* {
                pokemon.abilities.map(element=>{
                    return (
                        <li>{element.ability.name}</li>
                    )
                })
            } */}
        </ul>
        
       </div>
    )

}

export default Pokemon