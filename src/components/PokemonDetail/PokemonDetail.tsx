import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const fetchPokemonDetail = async (name:any) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

const PokemonDetail = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, isError } = useQuery(['pokemonDetail', name], () => fetchPokemonDetail(name));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Box margin={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {pokemon.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Types: {pokemon.types.map((type) => type.type.name).join(', ')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonDetail;
