import { Grid } from "@mui/material";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../utils/pokemonApiUtils";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <Grid container spacing={2}>
      {pokemons.map((pokemon) => (
        <Link to={`/pokemon/${pokemon.name}`}>
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        </Link>
      ))}
    </Grid>
  );
};

export default PokemonList;
