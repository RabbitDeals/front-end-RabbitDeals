import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function ProductCard({ anuncio }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" image={anuncio.imagens} alt={anuncio.titulo} sx={{ objectFit: 'contain', height: 200, bgcolor: '#fafafa' }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {anuncio.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {anuncio.vendedorNome}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
          R$ {anuncio.preco.toFixed(2)}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          {anuncio.avaliacao}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip label={anuncio.categoria} size="small" />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={anuncio.linkProduto} target="_blank" rel="noreferrer">
          Ver Produto
        </Button>
      </CardActions>
    </Card>
  );
}
