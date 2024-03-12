import TextField from '@mui/material/TextField';

interface SearchBarProps  {
    filter: string;
    setFilter: (value: string) => void;
}

const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
  return (
      <TextField
        fullWidth
        label="Search for a Pokémon"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ backgroundColor: 'white', padding: '0 10px'}}  
      />
  );
};

export default SearchBar;
