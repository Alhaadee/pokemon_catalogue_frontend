import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import Pokemon from "../components/Pokemon";
import Home from "../components/Home";

const PokemonContainer = () => {


    const[pokemons,setpokemons] = useState([])


    const fetchPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1154")
        const jsonData = await response.json();
        const pokemonsData = await jsonData.results

        setpokemons(pokemonsData)
        
    }

    useEffect(()=>{
        fetchPokemon();
    },[])


    return (
        <BrowserRouter>
        <div>
            <header>
            <h1>Pokemon Catalogue</h1>
            <img id="logo" src="https://i.pinimg.com/736x/aa/1c/db/aa1cdbfe8df004679a291346d50803d6.jpg" alt="pokeball logo"/>
            </header>

            <nav>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/all-pokemon">All Pokemon</Link></h3>    
            </nav>
                

            
            <Routes>
                <Route path="/all-pokemon" element = {
                    <PokemonList pokemons={pokemons}/>
                }/>
                 <Route path="/" element = {
                    <Home pokemons={pokemons}/>
                }/>
                 <Route path="/pokemon/:name" element = {
                    <Pokemon />
                }/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default PokemonContainer;