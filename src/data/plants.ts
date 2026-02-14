export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const categories = [
  { name: 'Tropical Plants', key: 'tropical' },
  { name: 'Succulents & Cacti', key: 'succulents' },
  { name: 'Flowering Plants', key: 'flowering' },
];

export const plants: Plant[] = [
  // Tropical Plants
  { id: 't1', name: 'Monstera Deliciosa', price: 35, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop', category: 'tropical' },
  { id: 't2', name: 'Bird of Paradise', price: 45, image: 'https://images.unsplash.com/photo-1595351298020-038700609878?w=300&h=300&fit=crop', category: 'tropical' },
  { id: 't3', name: 'Fiddle Leaf Fig', price: 55, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop', category: 'tropical' },
  { id: 't4', name: 'Rubber Plant', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop', category: 'tropical' },
  { id: 't5', name: 'Calathea Orbifolia', price: 32, image: 'https://images.unsplash.com/photo-1632207691143-643d2a4e0e38?w=300&h=300&fit=crop', category: 'tropical' },
  { id: 't6', name: 'Philodendron Brasil', price: 22, image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=300&h=300&fit=crop', category: 'tropical' },
  // Succulents & Cacti
  { id: 's1', name: 'Echeveria Elegans', price: 12, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop&q=80', category: 'succulents' },
  { id: 's2', name: 'Aloe Vera', price: 15, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop&q=80', category: 'succulents' },
  { id: 's3', name: 'Jade Plant', price: 18, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop', category: 'succulents' },
  { id: 's4', name: 'String of Pearls', price: 20, image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=300&h=300&fit=crop', category: 'succulents' },
  { id: 's5', name: 'Barrel Cactus', price: 25, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop&q=70', category: 'succulents' },
  { id: 's6', name: 'Zebra Haworthia', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop&q=70', category: 'succulents' },
  // Flowering Plants
  { id: 'f1', name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop', category: 'flowering' },
  { id: 'f2', name: 'Anthurium Red', price: 38, image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=300&h=300&fit=crop', category: 'flowering' },
  { id: 'f3', name: 'Orchid Phalaenopsis', price: 42, image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=300&h=300&fit=crop', category: 'flowering' },
  { id: 'f4', name: 'African Violet', price: 16, image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=300&h=300&fit=crop', category: 'flowering' },
  { id: 'f5', name: 'Hibiscus', price: 28, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&h=300&fit=crop', category: 'flowering' },
  { id: 'f6', name: 'Jasmine Plant', price: 24, image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=300&h=300&fit=crop', category: 'flowering' },
];
