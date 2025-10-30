// Mock database implementation for development
import { User, CartItem, WishlistItem, Address } from '@/data/types';
import bcrypt from 'bcryptjs';

// Hash passwords for mock users
const adminPasswordHash = bcrypt.hashSync('admin123', 12);
const userPasswordHash = bcrypt.hashSync('user123', 12);

// Mock users data
const mockUsers: any[] = [
  {
    id: '1',
    email: 'admin@lettex.com',
    password_hash: adminPasswordHash,
    name: 'Admin User',
    role: 'super_admin',
    email_verified: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'user@lettex.com',
    password_hash: userPasswordHash,
    name: 'Demo User',
    role: 'customer',
    email_verified: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

// Mock products data
const mockProducts: any[] = [
  {
    id: 'prod-001',
    slug: 'geevi-atta-bag',
    title: {
      en: 'Geevi Atta Bag',
      hi: 'गीवी अटा बैग'
    },
    description: {
      en: 'Premium quality wheat flour from Geevi. Perfect for making soft rotis and breads.',
      hi: 'गीवी से प्रीमियम गुणवत्ता वाला गेहूं का आटा। नरम रोटियां और ब्रेड बनाने के लिए उपयुक्त।'
    },
    price: 180,
    originalPrice: 200,
    stock: 50,
    rating: 4.5,
    reviewCount: 28,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Atta_Bag_Studio_Shot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-15'
  },
  {
    id: 'prod-002',
    slug: 'geevi-bay-leaf',
    title: {
      en: 'Geevi Bay Leaf',
      hi: 'गीवी तेजपत्ता'
    },
    description: {
      en: 'Aromatic bay leaves from Geevi. Adds rich flavor to curries, soups and rice dishes.',
      hi: 'गीवी से सुगंधित तेजपत्ता। कढ़ियों, सूप और चावल के भोजन में समृद्ध स्वाद जोड़ता है।'
    },
    price: 90,
    originalPrice: 100,
    stock: 40,
    rating: 4.3,
    reviewCount: 15,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_BayLeaf_Studio_Product.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-01-20'
  },
  {
    id: 'prod-003',
    slug: 'geevi-besan-packet',
    title: {
      en: 'Geevi Besan Packet',
      hi: 'गीवी बेसन पैकेट'
    },
    description: {
      en: 'Fine quality besan (gram flour) from Geevi. Ideal for making pakoras, sweets and snacks.',
      hi: 'गीवी से उच्च गुणवत्ता वाला बेसन (चना आटा)। पकौड़े, मिठाइयां और स्नैक्स बनाने के लिए आदर्श।'
    },
    price: 120,
    originalPrice: 140,
    stock: 35,
    rating: 4.7,
    reviewCount: 22,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Besan_Packet_Product_Shot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: false,
    newArrival: false,
    createdAt: '2024-01-10'
  },
  {
    id: 'prod-004',
    slug: 'geevi-biscuits',
    title: {
      en: 'Geevi Biscuits',
      hi: 'गीवी बिस्कुट'
    },
    description: {
      en: 'Delicious and crispy biscuits from Geevi. Perfect for tea time and snacks.',
      hi: 'गीवी से स्वादिष्ट और क्रिस्पी बिस्कुट। चाय के समय और स्नैक्स के लिए आदर्श।'
    },
    price: 80,
    originalPrice: 100,
    stock: 60,
    rating: 4.2,
    reviewCount: 18,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Biscuits_Studio_Shot.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-02-01'
  },
  {
    id: 'prod-005',
    slug: 'geevi-butter-box',
    title: {
      en: 'Geevi Butter Box',
      hi: 'गीवी मक्खन बॉक्स'
    },
    description: {
      en: 'Rich and creamy butter from Geevi. Made from pure cow milk for authentic taste.',
      hi: 'गीवी से समृद्ध और क्रीमी मक्खन। प्रामाणिक स्वाद के लिए शुद्ध गाय के दूध से बनाया गया।'
    },
    price: 220,
    originalPrice: 250,
    stock: 25,
    rating: 4.8,
    reviewCount: 35,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Butter_Box_Studio.png'
    ],
    featured: true,
    bestSeller: true,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-12'
  },
  {
    id: 'prod-006',
    slug: 'geevi-chana-packet',
    title: {
      en: 'Geevi Chana Packet',
      hi: 'गीवी चना पैकेट'
    },
    description: {
      en: 'Premium quality chana (chickpeas) from Geevi. Perfect for salads, curries and snacks.',
      hi: 'गीवी से प्रीमियम गुणवत्ता वाला चना। सलाद, कढ़ियों और स्नैक्स के लिए आदर्श।'
    },
    price: 150,
    originalPrice: 180,
    stock: 30,
    rating: 4.4,
    reviewCount: 20,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Chana_Packet_Studio.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-01-25'
  },
  {
    id: 'prod-007',
    slug: 'geevi-cheese-slices',
    title: {
      en: 'Geevi Cheese Slices',
      hi: 'गीवी चीज़ स्लाइस'
    },
    description: {
      en: 'Delicious cheese slices from Geevi. Perfect for sandwiches, burgers and breakfast.',
      hi: 'गीवी से स्वादिष्ट चीज़ स्लाइस। सैंडविच, बर्गर और नाश्ते के लिए आदर्श।'
    },
    price: 180,
    originalPrice: 200,
    stock: 20,
    rating: 4.6,
    reviewCount: 25,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Cheese_Slices_Product_Shot.png'
    ],
    featured: true,
    bestSeller: false,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-18'
  },
  {
    id: 'prod-008',
    slug: 'geevi-chili-powder',
    title: {
      en: 'Geevi Chili Powder',
      hi: 'गीवी चिली पाउडर'
    },
    description: {
      en: 'Spicy chili powder from Geevi. Adds perfect heat to your dishes.',
      hi: 'गीवी से मसालेदार चिली पाउडर। आपके भोजन में सही गरमाहट जोड़ता है।'
    },
    price: 90,
    originalPrice: 100,
    stock: 45,
    rating: 4.3,
    reviewCount: 17,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Chili_Powder_Studio_Shot.png'
    ],
    featured: false,
    bestSeller: true,
    trending: false,
    newArrival: false,
    createdAt: '2024-01-08'
  },
  {
    id: 'prod-009',
    slug: 'geevi-cloves-packet',
    title: {
      en: 'Geevi Cloves Packet',
      hi: 'गीवी लौंग पैकेट'
    },
    description: {
      en: 'Aromatic cloves from Geevi. Perfect for flavoring rice, biryani and meat dishes.',
      hi: 'गीवी से सुगंधित लौंग। चावल, बिरयानी और मांस के भोजन को स्वाद देने के लिए आदर्श।'
    },
    price: 120,
    originalPrice: 140,
    stock: 35,
    rating: 4.5,
    reviewCount: 19,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Cloves_Packet_Photography.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-01-30'
  },
  {
    id: 'prod-010',
    slug: 'geevi-coffee-pouch',
    title: {
      en: 'Geevi Coffee Pouch',
      hi: 'गीवी कॉफी पाउच'
    },
    description: {
      en: 'Rich and aromatic coffee from Geevi. Start your day with a perfect cup of coffee.',
      hi: 'गीवी से समृद्ध और सुगंधित कॉफी। एक परफेक्ट कप कॉफी के साथ अपना दिन शुरू करें।'
    },
    price: 250,
    originalPrice: 280,
    stock: 20,
    rating: 4.7,
    reviewCount: 32,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Coffee_Pouch_Studio_Shot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-14'
  },
  {
    id: 'prod-011',
    slug: 'geevi-coriander-powder',
    title: {
      en: 'Geevi Coriander Powder',
      hi: 'गीवी धनिया पाउडर'
    },
    description: {
      en: 'Freshly ground coriander powder from Geevi. Essential spice for Indian cooking.',
      hi: 'गीवी से ताजा पीसा धनिया पाउडर। भारतीय रसोई के लिए आवश्यक मसाला।'
    },
    price: 80,
    originalPrice: 90,
    stock: 50,
    rating: 4.4,
    reviewCount: 24,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Coriander_Powder_Product_Shot.png'
    ],
    featured: false,
    bestSeller: true,
    trending: false,
    newArrival: false,
    createdAt: '2024-01-05'
  },
  {
    id: 'prod-012',
    slug: 'geevi-cumin-packet',
    title: {
      en: 'Geevi Cumin Packet',
      hi: 'गीवी जीरा पैकेट'
    },
    description: {
      en: 'Premium quality cumin seeds from Geevi. Adds authentic flavor to curries and snacks.',
      hi: 'गीवी से प्रीमियम गुणवत्ता वाले जीरा के बीज। कढ़ियों और स्नैक्स में प्रामाणिक स्वाद जोड़ता है।'
    },
    price: 100,
    originalPrice: 120,
    stock: 40,
    rating: 4.6,
    reviewCount: 21,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Cumin_Packet_Product_Shot.png'
    ],
    featured: false,
    bestSeller: false,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-22'
  },
  {
    id: 'prod-013',
    slug: 'geevi-curd-cup',
    title: {
      en: 'Geevi Curd Cup',
      hi: 'गीवी दही कप'
    },
    description: {
      en: 'Fresh and creamy curd from Geevi. Made from pure cow milk for authentic taste.',
      hi: 'गीवी से ताजा और क्रीमी दही। प्रामाणिक स्वाद के लिए शुद्ध गाय के दूध से बनाया गया।'
    },
    price: 60,
    originalPrice: 70,
    stock: 30,
    rating: 4.5,
    reviewCount: 28,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Curd_Cup_Product_Shot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: false,
    newArrival: false,
    createdAt: '2024-01-16'
  },
  {
    id: 'prod-014',
    slug: 'geevi-curd-tub',
    title: {
      en: 'Geevi Curd Tub',
      hi: 'गीवी दही टब'
    },
    description: {
      en: 'Rich and creamy curd tub from Geevi. Perfect for daily consumption and cooking.',
      hi: 'गीवी से समृद्ध और क्रीमी दही टब। दैनिक उपभोग और रसोई के लिए आदर्श।'
    },
    price: 120,
    originalPrice: 140,
    stock: 25,
    rating: 4.7,
    reviewCount: 30,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Curd_Tub_Product_Shot.png'
    ],
    featured: true,
    bestSeller: false,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-13'
  },
  {
    id: 'prod-015',
    slug: 'geevi-ghee',
    title: {
      en: 'Geevi Ghee',
      hi: 'गीवी घी'
    },
    description: {
      en: 'Pure and aromatic ghee from Geevi. Made from cow milk for authentic taste.',
      hi: 'गीवी से शुद्ध और सुगंधित घी। प्रामाणिक स्वाद के लिए गाय के दूध से बनाया गया।'
    },
    price: 400,
    originalPrice: 450,
    stock: 20,
    rating: 4.9,
    reviewCount: 42,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Ghee_Product_Shot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-10'
  },
  {
    id: 'prod-016',
    slug: 'geevi-lentil-pouch',
    title: {
      en: 'Geevi Lentil Pouch',
      hi: 'गीवी दाल पाउच'
    },
    description: {
      en: 'Premium quality mixed lentils from Geevi. Perfect for daily cooking and soups.',
      hi: 'गीवी से प्रीमियम गुणवत्ता वाली मिश्रित दालें। दैनिक रसोई और सूप के लिए आदर्श।'
    },
    price: 180,
    originalPrice: 200,
    stock: 35,
    rating: 4.3,
    reviewCount: 18,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Lentil_Pouch_Product_Shot.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-02-01'
  },
  {
    id: 'prod-017',
    slug: 'geevi-maida-bag',
    title: {
      en: 'Geevi Maida Bag',
      hi: 'गीवी मैदा बैग'
    },
    description: {
      en: 'Fine quality maida from Geevi. Perfect for making cakes, pastries and fried snacks.',
      hi: 'गीवी से उच्च गुणवत्ता वाला मैदा। केक, पेस्ट्रीज़ और फ्राइड स्नैक्स बनाने के लिए आदर्श।'
    },
    price: 90,
    originalPrice: 100,
    stock: 45,
    rating: 4.1,
    reviewCount: 15,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Maida_Bag_Product_Shot.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-01-28'
  },
  {
    id: 'prod-018',
    slug: 'geevi-masoor-dal',
    title: {
      en: 'Geevi Masoor Dal',
      hi: 'गीवी मसूर दाल'
    },
    description: {
      en: 'Premium quality masoor dal from Geevi. Quick cooking and rich in protein.',
      hi: 'गीवी से प्रीमियम गुणवत्ता वाली मसूर दाल। तेज़ पकाने वाली और प्रोटीन से भरपूर।'
    },
    price: 140,
    originalPrice: 160,
    stock: 30,
    rating: 4.6,
    reviewCount: 26,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Masoor_Dal_Packshot.png'
    ],
    featured: true,
    bestSeller: true,
    trending: false,
    newArrival: false,
    createdAt: '2024-01-11'
  },
  {
    id: 'prod-019',
    slug: 'geevi-milk-pack',
    title: {
      en: 'Geevi Milk Pack',
      hi: 'गीवी दूध पैक'
    },
    description: {
      en: 'Fresh and pure milk from Geevi. Rich in calcium and essential nutrients.',
      hi: 'गीवी से ताजा और शुद्ध दूध। कैल्शियम और आवश्यक पोषक तत्वों से भरपूर।'
    },
    price: 60,
    originalPrice: 70,
    stock: 40,
    rating: 4.4,
    reviewCount: 35,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Milk_Pack_Studio.png'
    ],
    featured: true,
    bestSeller: false,
    trending: true,
    newArrival: false,
    createdAt: '2024-01-15'
  },
  {
    id: 'prod-020',
    slug: 'geevi-milk-tetra-pack',
    title: {
      en: 'Geevi Milk Tetra Pack',
      hi: 'गीवी दूध टेट्रा पैक'
    },
    description: {
      en: 'Long shelf life milk from Geevi. Perfect for storage and daily consumption.',
      hi: 'गीवी से लंबे समय तक संग्रहण योग्य दूध। संग्रहण और दैनिक उपभोग के लिए आदर्श।'
    },
    price: 70,
    originalPrice: 80,
    stock: 35,
    rating: 4.3,
    reviewCount: 28,
    categoryId: 'grocery-products',
    artisanId: 'local-farmers',
    images: [
      '/uploads/products/Geevi_Milk_Tetra_Pack.png'
    ],
    featured: false,
    bestSeller: false,
    trending: false,
    newArrival: true,
    createdAt: '2024-01-25'
  }
];

// Mock categories data
const mockCategories: any[] = [
  {
    id: 'grocery-products',
    slug: 'grocery-products',
    name: {
      en: 'Grocery Products',
      hi: 'किराने की वस्तुएं'
    }
  },
  {
    id: 'refined-oil',
    slug: 'refined-oil',
    name: {
      en: 'Refined Oil',
      hi: 'शोधित तेल'
    }
  },
  {
    id: 'milk-products',
    slug: 'milk-products',
    name: {
      en: 'Milk Products',
      hi: 'दूध के उत्पाद'
    }
  },
  {
    id: 'own-products',
    slug: 'own-products',
    name: {
      en: 'Own Products',
      hi: 'अपने उत्पाद'
    }
  }
];

// Mock artisans data
const mockArtisans: any[] = [
  {
    id: 'local-farmers',
    slug: 'local-farmers',
    name: 'Local Farmers',
    village: 'Local Community'
  },
  {
    id: 'dairy-producers',
    slug: 'dairy-producers',
    name: 'Dairy Producers',
    village: 'Local Dairy'
  }
];

// Mock cart items
let mockCartItems: any[] = [];

// Mock wishlist items
let mockWishlistItems: any[] = [];

// Mock orders
let mockOrders: any[] = [];

// Mock addresses
let mockAddresses: any[] = [];

// Mock database operations
export const mockDb = {
  // User operations
  async findUserByEmail(email: string): Promise<any | null> {
    const user = mockUsers.find((u: any) => u.email === email);
    return user || null;
  },

  async findUserById(id: string): Promise<any | null> {
    const user = mockUsers.find((u: any) => u.id === id);
    return user || null;
  },

  async createUser(userData: any): Promise<any> {
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    return newUser;
  },

  async updateUser(id: string, userData: any): Promise<any | null> {
    const userIndex = mockUsers.findIndex((u: any) => u.id === id);
    if (userIndex === -1) return null;
    
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      ...userData,
      updated_at: new Date().toISOString()
    };
    
    return mockUsers[userIndex];
  },

  // Product operations
  async getProductBySlug(slug: string): Promise<any | null> {
    const product = mockProducts.find((p: any) => p.slug === slug);
    if (!product) return null;
    
    const category = mockCategories.find((c: any) => c.id === product.categoryId);
    const artisan = mockArtisans.find((a: any) => a.id === product.artisanId);
    
    return {
      ...product,
      category: category ? {
        id: category.id,
        name: category.name,
        slug: category.slug
      } : null,
      artisan: artisan ? {
        id: artisan.id,
        name: artisan.name,
        village: artisan.village
      } : null,
      productImages: product.images.map((url: string, index: number) => ({
        url,
        isPrimary: index === 0
      }))
    };
  },

  async getProducts(filters: any): Promise<any[]> {
    let filteredProducts = [...mockProducts];
    
    // Apply category filter
    if (filters.category) {
      filteredProducts = filteredProducts.filter(product => product.categoryId === filters.category);
    }
    
    // Apply featured filter
    if (filters.featured) {
      filteredProducts = filteredProducts.filter(product => product.featured);
    }
    
    // Apply best seller filter
    if (filters.bestSeller) {
      filteredProducts = filteredProducts.filter(product => product.bestSeller);
    }
    
    // Apply new arrival filter
    if (filters.newArrival) {
      filteredProducts = filteredProducts.filter(product => product.newArrival);
    }
    
    // Limit results
    if (filters.limit) {
      filteredProducts = filteredProducts.slice(0, filters.limit);
    }
    
    // Enhance products with category and artisan data
    return filteredProducts.map(product => {
      const category = mockCategories.find((c: any) => c.id === product.categoryId);
      const artisan = mockArtisans.find((a: any) => a.id === product.artisanId);
      
      return {
        ...product,
        category: category ? {
          id: category.id,
          name: category.name,
          slug: category.slug
        } : null,
        artisan: artisan ? {
          id: artisan.id,
          name: artisan.name,
          village: artisan.village
        } : null
      };
    });
  },

  async searchProducts(searchParams: any): Promise<any> {
    let filteredProducts = [...mockProducts];
    
    // Search filter
    if (searchParams.query) {
      const query = searchParams.query.toLowerCase();
      filteredProducts = filteredProducts.filter(product => {
        const titleMatch = product.title.en.toLowerCase().includes(query) || 
                          product.title.hi.toLowerCase().includes(query);
        const descriptionMatch = product.description.en.toLowerCase().includes(query) || 
                                product.description.hi.toLowerCase().includes(query);
        const tagMatch = product.tags?.some((tag: string) => tag.toLowerCase().includes(query));
        const materialMatch = product.material?.toLowerCase().includes(query);
        
        return titleMatch || descriptionMatch || tagMatch || materialMatch;
      });
    }
    
    // Category filter
    if (searchParams.category && searchParams.category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.categoryId === searchParams.category);
    }
    
    // Price filter
    if (searchParams.minPrice || searchParams.maxPrice) {
      if (searchParams.minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= searchParams.minPrice);
      }
      if (searchParams.maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= searchParams.maxPrice);
      }
    }
    
    // Sort products
    filteredProducts.sort((a, b) => {
      switch (searchParams.sortBy) {
        case 'price_low_high':
          return a.price - b.price;
        case 'price_high_low':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'name':
          return a.title.en.localeCompare(b.title.en);
        default: // relevance
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
    
    // Get total count
    const totalCount = filteredProducts.length;
    
    // Paginate results
    const startIndex = (searchParams.page - 1) * searchParams.limit;
    const endIndex = startIndex + searchParams.limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Transform the data to match the expected format
    const transformedProducts = paginatedProducts.map((product: any) => {
      const productCategory = mockCategories.find(cat => cat.id === product.categoryId);
      const productArtisan = mockArtisans.find(art => art.id === product.artisanId);
      
      return {
        id: product.id,
        slug: product.slug,
        title: product.title,
        description: product.description,
        price: product.price,
        originalPrice: product.originalPrice,
        stock: product.stock,
        inStock: product.stock > 0,
        featured: product.featured,
        bestSeller: product.bestSeller,
        newArrival: product.newArrival,
        trending: product.trending,
        rating: product.rating,
        reviewCount: product.reviewCount,
        images: product.images,
        category: productCategory ? {
          id: productCategory.id,
          name: productCategory.name,
          slug: productCategory.slug
        } : null,
        artisan: productArtisan ? {
          id: productArtisan.id,
          name: productArtisan.name,
          village: productArtisan.village
        } : null,
        tags: product.tags || [],
        materials: product.material ? [product.material] : [],
        createdAt: product.createdAt
      };
    });
    
    return {
      products: transformedProducts,
      pagination: {
        currentPage: searchParams.page || 1,
        totalPages: Math.ceil(totalCount / (searchParams.limit || 10)),
        totalProducts: totalCount,
        hasNextPage: endIndex < totalCount,
        hasPrevPage: searchParams.page > 1
      }
    };
  },

  // Cart operations
  async getCartItems(userId: string): Promise<CartItem[]> {
    return mockCartItems.filter(item => item.user_id === userId);
  },

  async addToCart(userId: string, productId: string, quantity: number): Promise<CartItem> {
    const existingItemIndex = mockCartItems.findIndex(
      item => item.user_id === userId && item.product_id === productId
    );
    
    if (existingItemIndex >= 0) {
      // Update existing item
      mockCartItems[existingItemIndex].quantity += quantity;
      return mockCartItems[existingItemIndex];
    } else {
      // Create new item
      const cartItem: any = {
        id: `cart-${Date.now()}`,
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        created_at: new Date().toISOString()
      };
      mockCartItems.push(cartItem);
      return cartItem;
    }
  },

  async removeFromCart(userId: string, productId: string): Promise<boolean> {
    const initialLength = mockCartItems.length;
    mockCartItems = mockCartItems.filter(
      item => !(item.user_id === userId && item.product_id === productId)
    );
    return mockCartItems.length < initialLength;
  },

  async updateCartItemQuantity(userId: string, productId: string, quantity: number): Promise<boolean> {
    const itemIndex = mockCartItems.findIndex(
      item => item.user_id === userId && item.product_id === productId
    );
    
    if (itemIndex >= 0) {
      mockCartItems[itemIndex].quantity = quantity;
      return true;
    }
    
    return false;
  },

  async clearCart(userId: string): Promise<boolean> {
    const initialLength = mockCartItems.length;
    mockCartItems = mockCartItems.filter(item => item.user_id !== userId);
    return mockCartItems.length < initialLength;
  },

  // Order operations
  async createOrder(orderData: any): Promise<any> {
    // Create address if it doesn't exist
    let address = mockAddresses.find(
      addr => addr.userId === orderData.userId &&
              addr.phone === orderData.address.phone &&
              addr.address === orderData.address.address &&
              addr.city === orderData.address.city &&
              addr.state === orderData.address.state &&
              addr.pincode === orderData.address.pincode
    );
    
    if (!address) {
      address = {
        id: `addr-${Date.now()}`,
        userId: orderData.userId,
        name: orderData.address.fullName,
        phone: orderData.address.phone,
        address: orderData.address.address,
        city: orderData.address.city,
        state: orderData.address.state,
        pincode: orderData.address.pincode,
        type: 'HOME',
        created_at: new Date().toISOString()
      };
      mockAddresses.push(address);
    }
    
    // Create order
    const order = {
      id: `order-${Date.now()}`,
      orderNumber: orderData.orderNumber,
      userId: orderData.userId,
      addressId: address.id,
      subtotal: orderData.subtotal,
      shippingFee: orderData.shipping,
      tax: orderData.tax,
      totalAmount: orderData.total,
      paymentMethod: orderData.paymentMethod,
      status: 'PENDING',
      // Set payment status based on payment method
      paymentStatus: orderData.paymentMethod === 'cod' ? 'PENDING' : 'COMPLETED',
      created_at: new Date().toISOString()
    };
    mockOrders.push(order);
    
    // Create order items
    for (const item of orderData.items) {
      // In a real implementation, we would create order items
    }
    
    return {
      id: order.id,
      orderNumber: order.orderNumber,
      totalAmount: order.totalAmount
    };
  },

  // Wishlist operations
  async getWishlistItems(userId: string): Promise<WishlistItem[]> {
    return mockWishlistItems.filter(item => item.user_id === userId);
  },

  async addToWishlist(userId: string, productId: string): Promise<any> {
    const existingItemIndex = mockWishlistItems.findIndex(
      item => item.user_id === userId && item.product_id === productId
    );
    
    if (existingItemIndex === -1) {
      // Add new item if it doesn't exist
      const wishlistItem: any = {
        id: `wishlist-${Date.now()}`,
        user_id: userId,
        product_id: productId,
        created_at: new Date().toISOString()
      };
      mockWishlistItems.push(wishlistItem);
      return wishlistItem;
    }
    
    return mockWishlistItems[existingItemIndex];
  },

  async removeFromWishlist(userId: string, productId: string): Promise<boolean> {
    const initialLength = mockWishlistItems.length;
    mockWishlistItems = mockWishlistItems.filter(
      item => !(item.user_id === userId && item.product_id === productId)
    );
    return mockWishlistItems.length < initialLength;
  },
  
  // Admin operations for mock database
  async getAllProducts(): Promise<any[]> {
    // Enhance products with category and artisan data and proper image mapping
    return mockProducts.map(product => {
      const category = mockCategories.find((c: any) => c.id === product.categoryId);
      const artisan = mockArtisans.find((a: any) => a.id === product.artisanId);
      
      return {
        ...product,
        category: category ? {
          id: category.id,
          name: category.name,
          slug: category.slug
        } : null,
        artisan: artisan ? {
          id: artisan.id,
          name: artisan.name,
          village: artisan.village
        } : null,
        productImages: product.images.map((url: string, index: number) => ({
          url,
          isPrimary: index === 0
        }))
      };
    });
  },
  
  async createProduct(productData: any): Promise<any> {
    // Generate a new ID for the product
    const newId = `prod-${Date.now()}`;
    
    // Create the product object
    const newProduct = {
      id: newId,
      ...productData,
      // Map images array to the format expected by the frontend
      images: productData.images || [],
      // Set default values for boolean fields if not provided
      featured: productData.featured || false,
      bestSeller: productData.bestSeller || false,
      newArrival: productData.newArrival || false,
      trending: productData.trending || false,
      isActive: productData.isActive !== undefined ? productData.isActive : true,
      rating: productData.rating || 0,
      reviewCount: productData.reviewCount || 0,
      createdAt: new Date().toISOString()
    };
    
    // Add the new product to the mockProducts array
    mockProducts.push(newProduct);
    
    // Return the created product with enhanced data
    const category = mockCategories.find((c: any) => c.id === newProduct.categoryId);
    const artisan = mockArtisans.find((a: any) => a.id === newProduct.artisanId);
    
    return {
      ...newProduct,
      category: category ? {
        id: category.id,
        name: category.name,
        slug: category.slug
      } : null,
      artisan: artisan ? {
        id: artisan.id,
        name: artisan.name,
        village: artisan.village
      } : null,
      productImages: newProduct.images.map((url: string, index: number) => ({
        url,
        isPrimary: index === 0
      }))
    };
  },
  
  async getAllCategories(): Promise<any[]> {
    return mockCategories;
  },
  
  async getAllArtisans(): Promise<any[]> {
    return mockArtisans;
  },
  
  async getAllBanners(): Promise<any[]> {
    return []; // Return empty array for banners in mock
  },
  
  async getDashboardStats(): Promise<any> {
    return {
      totalProducts: mockProducts.length,
      totalOrders: mockOrders.length,
      totalUsers: mockUsers.length,
      totalArtisans: mockArtisans.length
    };
  }
};