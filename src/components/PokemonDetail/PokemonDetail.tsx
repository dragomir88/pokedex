import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const fetchPokemonDetail = async (name: string | undefined) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

interface PokemonType {
  type: { name: string };
};

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

const PokemonDetail = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, isError } = useQuery(['pokemonDetail', name], () => fetchPokemonDetail(name));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!pokemon) return <div>Pokemon not found.</div>;

  return (
    <Box margin={2}>
      <Card sx={{ display: 'flex', width: 600, position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {pokemon.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Types: {pokemon.types.map((type: PokemonType) => type.type.name).join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Abilities: {pokemon.abilities.map((ability: PokemonAbility) => ability.ability.name).join(', ')}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{
            width: 140,
            height: 140,
            borderRadius: '50%',  
            position: 'absolute',
            right: 1,  
            top: 1,  
          }}
        />
      </Card>
    </Box>
  );
};

export default PokemonDetail;
