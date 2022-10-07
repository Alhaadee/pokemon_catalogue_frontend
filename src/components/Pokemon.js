import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Pokemon = () => {

    const[pokemon,setPokemon] = useState({})
    const[loading,setLoading] = useState(true)
    const {name} = useParams();

    const fetchPokemonByName = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemonData = await response.json();
        setPokemon(pokemonData)
        setLoading(false)
    }

    const abilities =  loading ? <p>loading</p> : 
    pokemon.abilities.map((element,index)=>{
        return (
            <li key={index}>{element.ability.name}</li>
        )
    })

    const image = loading ? <p>loading image</p> : <img src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} alt="pokemon"/> 

    const render = loading ? <p>Loading....</p> : <p>Pokemon First Appearance: Pokemon {"" + pokemon.game_indices[0].version.name}</p>
   
    
            
    useEffect(()=>{
        fetchPokemonByName();
    },[name])
 

    return (
       <div className="pokemon-card">
        <h2>{name}</h2>
        <hr/>
        {image}
        <hr/>
        {render}
        <p>Pokemon Height(cm):<span>{pokemon.height * 10}</span></p>
        <p>Base Experience:<span>{pokemon.base_experience}</span></p>
        <h3>Abilities</h3>
        <ul>
            {abilities}
        </ul>
        
       </div>
    )

}

export default Pokemon