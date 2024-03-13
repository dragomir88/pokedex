import { Grid } from "@mui/material";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../utils/pokemonApiUtils";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (  
    <Grid container spacing={2}>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
          <PokemonCard  pokemon={pokemon} />
        </Link>
      ))}
    </Grid>
  );
};

export default PokemonList;
