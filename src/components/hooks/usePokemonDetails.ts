import {  UseQueryResult, useQueries } from 'react-query';
import axios from 'axios';

interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites : {
    front_default : string;
  }

}

const usePokemonDetails = (pokemonList: PokemonListItem[] = []): UseQueryResult<PokemonDetails>[] => {
  const pokemonQueries = useQueries(
    pokemonList.map(pokemon => {
      return {
        queryKey: ['pokemonDetails', pokemon.name],
        queryFn: () => axios.get(pokemon.url).then(response => response.data),
        staleTime: 5 * 60 * 1000, // 5 minutes
      };
    })
  );

  return pokemonQueries;
};

export default usePokemonDetails;