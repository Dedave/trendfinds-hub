export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  discount?: string;
  affiliateLink: string;
  featured?: boolean;
}

export const sampleProducts: Product[] = [
  // Sneakers & Fashion
  {
    id: "1",
    title: "Trendy Unisex Running Sneakers - Breathable Mesh Design",
    price: "$29.99",
    originalPrice: "$59.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    rating: 4.5,
    reviews: 1247,
    category: "Sneakers & Fashion",
    discount: "50% OFF",
    affiliateLink: "https://aliexpress.com/item/example1",
    featured: true,
  },
  {
    id: "2",
    title: "Stylish Casual Canvas Shoes - Multiple Colors Available",
    price: "$24.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&auto=format",
    rating: 4.3,
    reviews: 892,
    category: "Sneakers & Fashion",
    discount: "38% OFF",
    affiliateLink: "https://aliexpress.com/item/example2",
  },
  {
    id: "3",
    title: "Premium Leather Sneakers - Classic White Design",
    price: "$45.99",
    originalPrice: "$89.99",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format",
    rating: 4.7,
    reviews: 2134,
    category: "Sneakers & Fashion",
    discount: "49% OFF",
    affiliateLink: "https://aliexpress.com/item/example3",
    featured: true,
  },

  // Tech Gadgets
  {
    id: "4",
    title: "Wireless Bluetooth Earbuds - Noise Cancelling & Water Resistant",
    price: "$19.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format",
    rating: 4.4,
    reviews: 3421,
    category: "Tech Gadgets",
    discount: "60% OFF",
    affiliateLink: "https://aliexpress.com/item/example4",
    featured: true,
  },
  {
    id: "5",
    title: "Smartphone Gimbal Stabilizer - 3-Axis Professional Grade",
    price: "$35.99",
    originalPrice: "$79.99",
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=400&fit=crop&auto=format",
    rating: 4.6,
    reviews: 756,
    category: "Tech Gadgets",
    discount: "55% OFF",
    affiliateLink: "https://aliexpress.com/item/example5",
  },
  {
    id: "6",
    title: "Wireless Phone Charger Pad - Fast Charging 15W",
    price: "$12.99",
    originalPrice: "$24.99",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&auto=format",
    rating: 4.2,
    reviews: 1893,
    category: "Tech Gadgets",
    discount: "48% OFF",
    affiliateLink: "https://aliexpress.com/item/example6",
  },

  // Home Gadgets
  {
    id: "7",
    title: "Smart LED Strip Lights - WiFi Controlled RGB Colors",
    price: "$16.99",
    originalPrice: "$34.99",
    image: "https://images.unsplash.com/photo-1558618047-71c0c3d54a28?w=400&h=400&fit=crop&auto=format",
    rating: 4.5,
    reviews: 2847,
    category: "Home Gadgets",
    discount: "51% OFF",
    affiliateLink: "https://aliexpress.com/item/example7",
    featured: true,
  },
  {
    id: "8",
    title: "Automatic Plant Watering System - Self-Watering Spikes",
    price: "$8.99",
    originalPrice: "$19.99",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&auto=format",
    rating: 4.1,
    reviews: 967,
    category: "Home Gadgets",
    discount: "55% OFF",
    affiliateLink: "https://aliexpress.com/item/example8",
  },
  {
    id: "9",
    title: "Digital Kitchen Scale - Precise Weight Measurement",
    price: "$14.99",
    originalPrice: "$29.99",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format",
    rating: 4.3,
    reviews: 1534,
    category: "Home Gadgets",
    discount: "50% OFF",
    affiliateLink: "https://aliexpress.com/item/example9",
  },
];

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => product.category === category);
};

export const getTrendingProducts = (): Product[] => {
  return sampleProducts.sort((a, b) => b.reviews - a.reviews).slice(0, 6);
};
