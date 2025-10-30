import { db } from './src/lib/database/connection';

async function testWishlist() {
  try {
    // Test adding item to wishlist
    const wishlistItem = await db.addToWishlist('1', 'bamboo-wall-art-001');
    console.log('Added to wishlist:', wishlistItem);
    
    // Test getting wishlist items
    const wishlistItems = await db.getWishlistItems('1');
    console.log('Wishlist items:', wishlistItems);
    
    // Test removing item from wishlist
    const removed = await db.removeFromWishlist('1', 'bamboo-wall-art-001');
    console.log('Removed from wishlist:', removed);
    
    // Test getting wishlist items again
    const wishlistItemsAfterRemoval = await db.getWishlistItems('1');
    console.log('Wishlist items after removal:', wishlistItemsAfterRemoval);
    
    console.log('Wishlist functionality test completed successfully!');
  } catch (error) {
    console.error('Wishlist test error:', error);
  }
}

testWishlist();