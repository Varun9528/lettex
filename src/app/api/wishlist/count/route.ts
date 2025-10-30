import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/auth/session';
import { db } from '@/lib/database/connection';

// Get wishlist item count
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(request);
    
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const wishlistItems = await db.getWishlistItems(session.user.id);
    const wishlistItemCount = wishlistItems.length;

    return NextResponse.json({
      success: true,
      count: wishlistItemCount
    });

  } catch (error) {
    console.error('Error fetching wishlist count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch wishlist count' },
      { status: 500 }
    );
  }
}