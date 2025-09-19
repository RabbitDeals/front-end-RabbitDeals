import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const MOCK_DATA = {
  anuncios: [
    // Suplementos
    { anuncioId: 1, titulo: '2hot 200g Max Titanium', vendedorNome: 'Por Max Titanium', linkProduto: '#', preco: 79.9, avaliacao: '4,8 (508)', imagens: 'https://http2.mlstatic.com/D_Q_NP_2X_774472-MLB86841057813_062025-E-2hot-200g-max-titanium.webp', categoria: 'Suplemento' },
    { anuncioId: 2, titulo: 'Whey Protein 900g Growth', vendedorNome: 'Por Growth Supplements', linkProduto: '#', preco: 119.9, avaliacao: '4,7 (1.204)', imagens: 'https://http2.mlstatic.com/D_Q_NP_2X_whey-growth.webp', categoria: 'Suplemento' },
    { anuncioId: 3, titulo: 'Creatina 300g Universal', vendedorNome: 'Por Universal Nutrition', linkProduto: '#', preco: 89.9, avaliacao: '4,9 (890)', imagens: 'https://http2.mlstatic.com/D_Q_NP_2X_creatina-universal.webp', categoria: 'Suplemento' },
    { anuncioId: 4, titulo: 'BCAA 120 cápsulas Integralmedica', vendedorNome: 'Por Integralmedica', linkProduto: '#', preco: 59.9, avaliacao: '4,6 (340)', imagens: 'https://http2.mlstatic.com/D_Q_NP_2X_bcaa-integralmedica.webp', categoria: 'Suplemento' },
    { anuncioId: 5, titulo: 'Pré-treino C4 Cellucor 300g', vendedorNome: 'Por Cellucor', linkProduto: '#', preco: 139.9, avaliacao: '4,8 (712)', imagens: 'https://http2.mlstatic.com/D_Q_NP_2X_pre-treino-c4.webp', categoria: 'Suplemento' },
    // Roupas
    { anuncioId: 6, titulo: 'Camiseta DryFit Masculina', vendedorNome: 'Por FitnessWear', linkProduto: '#', preco: 49.9, avaliacao: '4,5 (210)', imagens: 'https://via.placeholder.com/300x300.png?text=Camiseta', categoria: 'Roupas' },
    { anuncioId: 7, titulo: 'Bermuda de Treino', vendedorNome: 'Por SportBrand', linkProduto: '#', preco: 69.9, avaliacao: '4,4 (120)', imagens: 'https://via.placeholder.com/300x300.png?text=Bermuda', categoria: 'Roupas' },
    { anuncioId: 8, titulo: 'Regata Fitness Feminina', vendedorNome: 'Por FitLady', linkProduto: '#', preco: 39.9, avaliacao: '4,6 (95)', imagens: 'https://via.placeholder.com/300x300.png?text=Regata', categoria: 'Roupas' },
    // Acessórios
    { anuncioId: 9, titulo: 'Capa de Luvas de Academia', vendedorNome: 'Por GripPro', linkProduto: '#', preco: 29.9, avaliacao: '4,3 (58)', imagens: 'https://via.placeholder.com/300x300.png?text=Luvas', categoria: 'Acessórios' },
    { anuncioId: 10, titulo: 'Mochila Esportiva 30L', vendedorNome: 'Por PackPro', linkProduto: '#', preco: 149.9, avaliacao: '4,7 (220)', imagens: 'https://via.placeholder.com/300x300.png?text=Mochila', categoria: 'Acessórios' },
    // Equipamentos
    { anuncioId: 11, titulo: 'Halter 5kg Emborrachado', vendedorNome: 'Por StrongFit', linkProduto: '#', preco: 79.9, avaliacao: '4,6 (410)', imagens: 'https://via.placeholder.com/300x300.png?text=Halter+5kg', categoria: 'Equipamento' },
    { anuncioId: 12, titulo: 'Barra Reta 1,5m', vendedorNome: 'Por StrongFit', linkProduto: '#', preco: 199.9, avaliacao: '4,8 (150)', imagens: 'https://via.placeholder.com/300x300.png?text=Barra+Reta', categoria: 'Equipamento' },
    { anuncioId: 13, titulo: 'Anilha 10kg', vendedorNome: 'Por IronPro', linkProduto: '#', preco: 249.9, avaliacao: '4,9 (90)', imagens: 'https://via.placeholder.com/300x300.png?text=Anilha+10kg', categoria: 'Equipamento' },
    // Mais itens variados até 30
    { anuncioId: 14, titulo: 'Shorts Compressão', vendedorNome: 'Por FitPro', linkProduto: '#', preco: 59.9, avaliacao: '4,2 (40)', imagens: 'https://via.placeholder.com/300x300.png?text=Shorts', categoria: 'Roupas' },
    { anuncioId: 15, titulo: 'Meias Antiderrapantes', vendedorNome: 'Por FootGrip', linkProduto: '#', preco: 24.9, avaliacao: '4,1 (18)', imagens: 'https://via.placeholder.com/300x300.png?text=Meias', categoria: 'Acessórios' },
    { anuncioId: 16, titulo: 'Coqueteleira 700ml', vendedorNome: 'Por ShakeIt', linkProduto: '#', preco: 34.9, avaliacao: '4,6 (340)', imagens: 'https://via.placeholder.com/300x300.png?text=Coqueteleira', categoria: 'Acessórios' },
    { anuncioId: 17, titulo: 'Camiseta DryFit Feminina', vendedorNome: 'Por FitLady', linkProduto: '#', preco: 54.9, avaliacao: '4,5 (99)', imagens: 'https://via.placeholder.com/300x300.png?text=Camiseta+F', categoria: 'Roupas' },
    { anuncioId: 18, titulo: 'Whey Isolado 900g Pro', vendedorNome: 'Por ProSupps', linkProduto: '#', preco: 149.9, avaliacao: '4,8 (501)', imagens: 'https://via.placeholder.com/300x300.png?text=Whey+Isolado', categoria: 'Suplemento' },
    { anuncioId: 19, titulo: 'Termo CPAP', vendedorNome: 'Por Thermo', linkProduto: '#', preco: 89.9, avaliacao: '4,0 (12)', imagens: 'https://via.placeholder.com/300x300.png?text=Termo', categoria: 'Acessórios' },
    { anuncioId: 20, titulo: 'Bola Suíça 65cm', vendedorNome: 'Por GymBall', linkProduto: '#', preco: 129.9, avaliacao: '4,4 (77)', imagens: 'https://via.placeholder.com/300x300.png?text=Bola+Suica', categoria: 'Equipamento' },
    { anuncioId: 21, titulo: 'Camiseta Retro', vendedorNome: 'Por RetroWear', linkProduto: '#', preco: 69.9, avaliacao: '4,3 (44)', imagens: 'https://via.placeholder.com/300x300.png?text=Camiseta+Retro', categoria: 'Roupas' },
    { anuncioId: 22, titulo: 'Halter 10kg', vendedorNome: 'Por StrongFit', linkProduto: '#', preco: 129.9, avaliacao: '4,7 (210)', imagens: 'https://via.placeholder.com/300x300.png?text=Halter+10kg', categoria: 'Equipamento' },
    { anuncioId: 23, titulo: 'Bermuda Térmica', vendedorNome: 'Por ThermWear', linkProduto: '#', preco: 89.9, avaliacao: '4,0 (14)', imagens: 'https://via.placeholder.com/300x300.png?text=Bermuda+Termica', categoria: 'Roupas' },
    { anuncioId: 24, titulo: 'Caneleira 2kg Par', vendedorNome: 'Por WeightPro', linkProduto: '#', preco: 79.9, avaliacao: '4,2 (34)', imagens: 'https://via.placeholder.com/300x300.png?text=Caneleira', categoria: 'Equipamento' },
    { anuncioId: 25, titulo: 'Luvas CrossFit', vendedorNome: 'Por GripPro', linkProduto: '#', preco: 59.9, avaliacao: '4,6 (120)', imagens: 'https://via.placeholder.com/300x300.png?text=Luvas+Crossfit', categoria: 'Acessórios' },
    { anuncioId: 26, titulo: 'Mochila Fitness 20L', vendedorNome: 'Por PackPro', linkProduto: '#', preco: 129.9, avaliacao: '4,5 (88)', imagens: 'https://via.placeholder.com/300x300.png?text=Mochila+20L', categoria: 'Acessórios' },
    { anuncioId: 27, titulo: 'Whey Vegan 900g', vendedorNome: 'Por GreenSupps', linkProduto: '#', preco: 139.9, avaliacao: '4,4 (64)', imagens: 'https://via.placeholder.com/300x300.png?text=Whey+Vegan', categoria: 'Suplemento' },
    { anuncioId: 28, titulo: 'Top de Treino', vendedorNome: 'Por FitLady', linkProduto: '#', preco: 49.9, avaliacao: '4,6 (55)', imagens: 'https://via.placeholder.com/300x300.png?text=Top', categoria: 'Roupas' },
    { anuncioId: 29, titulo: 'Anilha 5kg', vendedorNome: 'Por IronPro', linkProduto: '#', preco: 129.9, avaliacao: '4,7 (40)', imagens: 'https://via.placeholder.com/300x300.png?text=Anilha+5kg', categoria: 'Equipamento' },
    { anuncioId: 30, titulo: 'Faixa Elástica Nível Médio', vendedorNome: 'Por ElasticFit', linkProduto: '#', preco: 29.9, avaliacao: '4,3 (27)', imagens: 'https://via.placeholder.com/300x300.png?text=Faixa+Elastica', categoria: 'Acessórios' },
  ],
};

export async function fetchAnuncios() {
  const useMock = import.meta.env.VITE_USE_MOCK === 'true';
  if (useMock) {
    return new Promise((res) => setTimeout(() => res(MOCK_DATA), 300));
  }

  const resp = await api.get('/anuncios');
  return resp.data;
}

export default api;
