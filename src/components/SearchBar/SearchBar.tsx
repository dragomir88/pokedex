import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
interface SearchBarProps {
  filter: string;
  setFilter: (value: string) => void;
}

const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
const navigate = useNavigate();

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFilter(e.target.value);
  navigate(`/?search=${e.target.value}`);
};

return (
    <TextField
      fullWidth
      label="Search for a Pokémon"
      variant="outlined"
      value={filter}
      onChange={handleSearch}
      sx={{ backgroundColor: 'white', padding: '0 10px'}}  
    />
);
};

export default SearchBar;