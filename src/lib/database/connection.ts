// Database abstraction layer that works with Prisma (MySQL) or falls back to mock
import { mockDb } from './mock';

// Force use of mock database by setting usePrisma to false
let prisma: any = null;
let usePrisma = false;

// Add a function to check if we should use Prisma
const shouldUsePrisma = () => usePrisma && prisma;

// Database operations
export const db = {
  // User operations
  async findUserByEmail(email: string): Promise<any | null> {
    // Always use mock database
    return mockDb.findUserByEmail(email);
  },

  async findUserById(id: string): Promise<any | null> {
    // Always use mock database
    return mockDb.findUserById(id);
  },

  async createUser(userData: any): Promise<any> {
    // Always use mock database
    return mockDb.createUser(userData);
  },

  async updateUser(id: string, userData: any): Promise<any | null> {
    // Always use mock database
    return mockDb.updateUser(id, userData);
  },

  // Product operations
  async getProductBySlug(slug: string): Promise<any | null> {
    // Always use mock database
    return mockDb.getProductBySlug(slug);
  },

  async getProducts(filters: any): Promise<any[]> {
    // Always use mock database
    return mockDb.getProducts(filters);
  },

  async searchProducts(searchParams: any): Promise<any> {
    // Always use mock database
    return mockDb.searchProducts(searchParams);
  },

  async createProduct(productData: any): Promise<any> {
    // Always use mock database
    return mockDb.createProduct(productData);
  },

  // Cart operations
  async getCartItems(userId: string): Promise<any[]> {
    // Always use mock database
    return mockDb.getCartItems(userId);
  },

  async addToCart(userId: string, productId: string, quantity: number): Promise<any> {
    // Always use mock database
    return mockDb.addToCart(userId, productId, quantity);
  },

  async removeFromCart(userId: string, productId: string): Promise<boolean> {
    // Always use mock database
    return mockDb.removeFromCart(userId, productId);
  },

  async updateCartItemQuantity(userId: string, productId: string, quantity: number): Promise<boolean> {
    // Always use mock database
    return mockDb.updateCartItemQuantity(userId, productId, quantity);
  },

  async clearCart(userId: string): Promise<boolean> {
    // Always use mock database
    return mockDb.clearCart(userId);
  },

  // Order operations
  async createOrder(orderData: any): Promise<any> {
    // Always use mock database
    return mockDb.createOrder(orderData);
  },

  // Wishlist operations
  async getWishlistItems(userId: string): Promise<any[]> {
    // Always use mock database
    return mockDb.getWishlistItems(userId);
  },

  async addToWishlist(userId: string, productId: string): Promise<any> {
    // Always use mock database
    return mockDb.addToWishlist(userId, productId);
  },

  async removeFromWishlist(userId: string, productId: string): Promise<boolean> {
    // Always use mock database
    return mockDb.removeFromWishlist(userId, productId);
  },
  
  // Admin operations
  async getAllProducts(): Promise<any[]> {
    // Always use mock database
    return mockDb.getAllProducts();
  },
  
  async getAllCategories(): Promise<any[]> {
    // Always use mock database
    return mockDb.getAllCategories();
  },
  
  async getAllArtisans(): Promise<any[]> {
    // Always use mock database
    return mockDb.getAllArtisans();
  },
  
  async getAllBanners(): Promise<any[]> {
    // Always use mock database
    return mockDb.getAllBanners();
  },
  
  async getDashboardStats(): Promise<any> {
    // Always use mock database
    return mockDb.getDashboardStats();
  }
};