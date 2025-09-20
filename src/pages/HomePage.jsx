import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Grid, Box, TextField, MenuItem, Select, InputLabel, FormControl, Pagination, Stack } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { fetchAnuncios } from '../api/anunciosApi';

export default function HomePage() {
  const [anuncios, setAnuncios] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  useEffect(() => {
    let mounted = true;
    async function load() {
      const data = await fetchAnuncios();
      if (mounted) setAnuncios(data.anuncios || []);
    }
    load();
    return () => (mounted = false);
  }, []);

  const categories = useMemo(() => ['All', ...Array.from(new Set(anuncios.map((a) => a.categoria)))], [anuncios]);

  const filtered = useMemo(() => {
    return anuncios.filter((a) => {
      const matchesQuery = a.titulo.toLowerCase().includes(query.toLowerCase()) || a.vendedorNome.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || a.categoria === category;
      return matchesQuery && matchesCategory;
    });
  }, [anuncios, query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => setPage(1), [query, category]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        RabbitDeals
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Produtos em várias categorias — suplementos, roupas, equipamentos e acessórios
      </Typography>

      <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField fullWidth placeholder="Pesquisar produtos ou vendedor" value={query} onChange={(e) => setQuery(e.target.value)} />
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="category-label">Categoria</InputLabel>
          <Select labelId="category-label" value={category} label="Categoria" onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {visible.map((a) => (
            <Grid item key={a.anuncioId} xs={12} sm={6} md={4}>
              <ProductCard anuncio={a} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack spacing={2} sx={{ mt: 4, mb: 4, alignItems: 'center' }}>
        <Pagination count={pageCount} page={page} onChange={(_, value) => setPage(value)} color="primary" />
      </Stack>
    </Container>
  );
}
