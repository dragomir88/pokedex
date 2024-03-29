import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokemonList from "../PokemonList/PokemonList";
import SearchBar from "../SearchBar/SearchBar";
import TypeSelector from "../TypeSelector/TypeSelector";
import {
  fetchPokemons,
  filterPokemonsWithDetails,
} from "../utils/pokemonApiUtils";
import { Box } from "@mui/material";
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const [filter, setFilter] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const location = useLocation();

  const useQueryParams = () => new URLSearchParams(location.search);
  const queryParams = useQueryParams();
  const {
    data: pokemonList,
    isLoading,
    isError,
  } = useQuery("pokemons", fetchPokemons);

  useEffect(() => {
    const searchParam = queryParams.get('search');
    if (searchParam) {
      setFilter(searchParam);
    }
  }, [queryParams]);

  const pokemonDetailsQueries = usePokemonDetails(pokemonList);
  const filteredPokemonsWithDetails = filterPokemonsWithDetails(
    pokemonDetailsQueries,
    filter,
    selectedType
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
        p={2}
        sx={{ backgroundColor: "white", borderRadius: "4px" }}
      >
        <SearchBar filter={filter} setFilter={setFilter} />
        <TypeSelector
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      </Box>
      <PokemonList pokemons={filteredPokemonsWithDetails} />
    </>
  );
}

export default SearchPage;
