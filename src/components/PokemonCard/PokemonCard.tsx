import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Box margin={2}> 
      <Card sx={{ maxWidth: 140, minWidth: 200, minHeight: 260 }}> 
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{
            backgroundColor: 'grey.200',
            objectFit: 'contain',
            p: 1,
          }}
        />
        <CardContent>
          <Typography variant="h6" noWrap align="center">
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
