import { useQuery } from 'react-query';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fetchTypes } from '../utils/pokemonApiUtils';

type PokemonTypeOption = {
  value: string;
  label: string;
};

type TypeSelectorProps = {
  selectedType: string;
  onTypeChange: (type: string) => void;
};

function TypeSelector({ selectedType, onTypeChange }: TypeSelectorProps) {

  const { data: types, isLoading, isError, error } = useQuery<PokemonTypeOption[], Error>('pokemonTypes', fetchTypes);

  if (isLoading) return <div>Loading types...</div>;
  if (isError) return <div>Error loading types: {error?.message}</div>;

  return (
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          value={selectedType}
          label="Type"
          onChange={(event) => onTypeChange(event.target.value)}
          renderValue={selected => selected !== '' ? selected : <em>None</em>}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {types?.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default TypeSelector;
