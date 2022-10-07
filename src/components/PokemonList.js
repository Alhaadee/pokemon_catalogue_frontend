import { Link } from "react-router-dom";

const PokemonList = ({pokemons}) => {

    const pokemonAscending = [...pokemons].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
    const list1 = pokemonAscending.slice(0,pokemons.length/3)
    const list2 = pokemonAscending.slice((pokemons.length/3)+1,(pokemons.length*2/3))
    const list3 = pokemonAscending.slice((pokemons.length*2/3)+1)


const listItems1 = list1.map((pokemon,index)=>{
        return ( <Link to={`/pokemon/${pokemon.name}`} key={pokemon+index} ><li>{pokemon.name}</li></Link>)
    })
const listItems2 = list2.map((pokemon,index)=>{
        return ( <Link to={`/pokemon/${pokemon.name}`} key={pokemon+index}><li>{pokemon.name}</li></Link>)
    })
const listItems3 = list3.map((pokemon,index)=>{
        return ( <Link to={`/pokemon/${pokemon.name}`} key={pokemon+index}><li>{pokemon.name}</li></Link>)
    })


return (
    <>
        <h2>Pokemon List</h2>
        <div className="list_container">
        <ul className="list1">
            {listItems1}
        </ul>
        <ul className="list2">
        {listItems2}
        </ul>
        <ul className="list3">
        {listItems3}
        </ul>
        </div>
    </>
)

}

export default PokemonList