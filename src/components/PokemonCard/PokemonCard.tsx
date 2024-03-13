import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Pokemon } from '../utils/pokemonApiUtils';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const { name, sprites } = pokemon;
  return (
    <Box margin={2}> 
      <Card sx={{ maxWidth: 140, minWidth: 200, minHeight: 260 }}> 
        <CardMedia
          component="img"
          height="140"
          image={sprites.front_default}
          alt={name}  
          sx={{
            backgroundColor: 'grey.200',
            objectFit: 'contain',
            p: 1,
          }}
        />
        <CardContent>
          <Typography variant="h6" noWrap align="center">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
