import { PokemonClient } from 'pokenode-ts';

export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
  }
  
 export interface PokemonListItem {
    name: string;
    url: string;
  }

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonListItem {
  name: string;
  url: string;
}

const api = new PokemonClient();

export const fetchPokemons = async (): Promise<PokemonListItem[]> => {
  const data = await api.listPokemons();
  console.log("data", data.results);
  return data.results;
};

export const fetchTypes = async () => {
    const { results } = await api.listTypes();
    return results.map(type => ({
      value: type.name,
      label: type.name.toUpperCase(),
    }));
  };

export const filterPokemonsWithDetails = (
  pokemonDetailsQueries: any[],
  filter: string,
  selectedType: string
): Pokemon[] => {
  return pokemonDetailsQueries
    .filter(query => query?.isSuccess)
    .map(query => query.data)
    .filter(pokemon => pokemon?.name?.includes(filter.toLowerCase()))
    .filter(pokemon => selectedType ? pokemon?.types?.some(type => type.type.name === selectedType) : true);
};